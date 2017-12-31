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
      const month = postDate.toLocaleString('en-us', { month: 'long' });
      const monthString = `${month} ${postDate.getFullYear()}`;

      if (map.has(monthString)) {
        map.get(monthString).push({ fileName, post });
      } else {
        map.set(monthString, [{ fileName, post }]);
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
