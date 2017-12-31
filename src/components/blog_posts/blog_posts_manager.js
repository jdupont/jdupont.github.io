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

  getPost(title) {
    return this.blogPosts(title);
  }
}

export default BlogPostsManager;
