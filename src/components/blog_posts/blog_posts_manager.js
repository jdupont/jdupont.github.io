class BlogPostsManager {
  constructor() {
    this.blogPosts = require.context('!json-loader!front-matter-loader!../../../public/posts/', true, /.md$/);
  }

  posts() {
    return this.blogPosts.keys().map((fileName) => {
      const post = this.blogPosts(fileName);

      return {
        post,
        fileName,
      };
    });
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
