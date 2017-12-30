class BlogPostsManager {
  constructor() {
    this.blogPosts = require.context('!json-loader!front-matter-loader!../../../public/posts/', true, /.md$/);
  }

  getBlogPosts() {
    return this.blogPosts;
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

  getPost(title) {
    return this.blogPosts(title);
  }
}

export default BlogPostsManager;
