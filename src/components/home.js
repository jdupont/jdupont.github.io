import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './header';
import PersistentDrawer from './drawer/persistent_drawer';
import RecentBlogPosts from './recent_blog_posts';
import AboutMe from './about_me';
import FourOhFour from './four_oh_four';
import QueryRoute from './routing/query_route';
import BlogPost from './blog_posts/blog_post';
import DateArchives from './archives/date_archives';
import TagArchives from './archives/tag_archives';

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
        <PersistentDrawer
          open={this.state.open}
          onClose={() => { this.setState({ open: false }); }}
        />
        <Switch>
          <Route exact path="/" component={RecentBlogPosts} />
          <Route path="/about" component={AboutMe} />
          <QueryRoute path="/blogs/" component={BlogPost} />
          <QueryRoute path="/archives/date" component={DateArchives} />
          <QueryRoute path="/archives/tags" component={TagArchives} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    );
  }
}

export default Home;
