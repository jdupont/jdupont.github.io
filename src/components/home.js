import React, { Component } from 'react';

import Header from './header';
import PersistentDrawer from './persistent_drawer';
import RecentBlogPosts from './recent_blog_posts';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <div>
        <Header open={this.state.open} onMenuClick={() => this.setState({ open: true })} />
        <PersistentDrawer open={this.state.open} onClose={() => this.setState({ open: false })} />
        <RecentBlogPosts open={this.state.open} />
      </div>
    );
  }
}

export default Home;
