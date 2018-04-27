class BlogPostsManager {
  static sortChronologically(a, b) {
    return a.post.attributes.date > b.post.attributes.date ? 1 : -1;
  }

  constructor(pageSize = 5) {
    this.blogPosts = require.context('!json-loader!front-matter-loader!../../../public/posts/', true, /.md$/);
    this.pageSize = pageSize;

    this.allPosts = null;
  }

  fetchAllPosts() {
    if (!this.allPosts) {
      const posts = this.blogPosts.keys().map((fileName) => {
        const post = this.blogPosts(fileName);

        return {
          post,
          fileName,
        };
      });

      this.allPosts = [...posts].sort(BlogPostsManager.sortChronologically).reverse();
    }

    return this.allPosts;
  }

  posts(pageNum = 0) {
    const allPosts = this.fetchAllPosts();

    if (pageNum < allPosts.length / this.pageSize) {
      return allPosts.slice(pageNum * this.pageSize, (pageNum + 1) * this.pageSize);
    }

    return [];
  }

  hasMorePages(currentPage) {
    const allPosts = this.fetchAllPosts();
    const numPostsDisplayed = (currentPage + 1) * this.pageSize;
    return numPostsDisplayed < allPosts.length;
  }

  postsByMonth() {
    const reduction = this.posts().reduce((map, { fileName, post }) => {
      const postDate = new Date(post.attributes.date);
      const twoDigitMonth = postDate.getMonth() < 10 ? `0${postDate.getMonth()}` : postDate.getMonth();
      const key = `${postDate.getFullYear()}-${twoDigitMonth}`;

      if (map.has(key)) {
        map.get(key).push({ fileName, post });
      } else {
        map.set(key, [{ fileName, post }]);
      }

      return map;
    }, new Map());

    return reduction;
  }

  postsByTag() {
    const reduction = this.posts().reduce((map, { fileName, post }) => {
      const { tags } = post.attributes;

      tags.forEach((tag) => {
        if (map.has(tag)) {
          map.get(tag).push({ fileName, post });
        } else {
          map.set(tag, [{ fileName, post }]);
        }
      });

      return map;
    }, new Map());

    return reduction;
  }

  postsMatchingTags(filterTags) {
    const matches = this.posts().reduce((list, { fileName, post }) => {
      const postTags = post.attributes.tags;

      const allFound = filterTags.every(filterTag => postTags.indexOf(filterTag) >= 0);

      if (allFound) {
        list.push({ fileName, post });
      }

      return list;
    }, []);

    return matches;
  }

  allTags() {
    const tags = this.posts().reduce((set, { post }) => {
      post.attributes.tags.forEach(tag => set.add(tag));
      return set;
    }, new Set());

    return tags;
  }

  getPost(title) {
    return this.blogPosts(title);
  }
}

export default BlogPostsManager;
