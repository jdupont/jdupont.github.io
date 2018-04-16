import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';
import ReactGA from 'react-ga';
import 'typeface-roboto';

import Header from './header';
import PersistentDrawer from './drawer/persistent_drawer';
import RecentBlogPosts from './recent_blog_posts';
import AboutMe from './about_me/about_me';
import CCLSProjectPage from './projects/ccls/ccls_project_page';
import Halloween from './halloween/halloween';
import FourOhFour from './four_oh_four';
import QueryRoute from './routing/query_route';
import BlogPost from './blog_posts/blog_post';
import DateArchives from './archives/date_archives';
import TagArchives from './archives/tag_archives';
import { startingTheme } from '../style/jdupont_themes';
import PageTracker from './page_tracker';

ReactGA.initialize('UA-97185295-2');

class Home extends Component {
  static getCurrentBackgroundColor(currentTheme) {
    return currentTheme.palette.background.default;
  }

  constructor(props) {
    super(props);

    this.state = {
      currentTheme: startingTheme,
      open: false,
    };

    this.onThemeChange = this.onThemeChange.bind(this);
    this.onThemeReset = this.onThemeReset.bind(this);
  }

  onThemeChange(updatedTheme) {
    this.setState({ currentTheme: updatedTheme });
  }

  onThemeReset() {
    this.setState({ currentTheme: startingTheme });
  }

  render() {
    const { currentTheme } = this.state;

    return (
      <MuiThemeProvider theme={currentTheme}>
        <div style={{ backgroundColor: Home.getCurrentBackgroundColor(currentTheme) }}>
          <CssBaseline />
          <BrowserRouter>
            <div>
              <PageTracker />
              <Header open={this.state.open} onMenuClick={() => this.setState({ open: true })} />
              <PersistentDrawer
                open={this.state.open}
                onClose={() => { this.setState({ open: false }); }}
              />
              <div style={{ padding: currentTheme.spacing.unit }}>
                <Switch>
                  <Route exact path="/" component={RecentBlogPosts} />
                  <Route path="/about" component={AboutMe} />
                  <Route path="/projects/ccls" component={CCLSProjectPage} />
                  <Route path="/halloween" component={() => <Halloween onThemeChange={this.onThemeChange} onThemeReset={this.onThemeReset} />} />
                  <QueryRoute path="/blogs/" component={BlogPost} />
                  <Route path="/archives/date" component={DateArchives} />
                  <QueryRoute path="/archives/tags" component={TagArchives} />
                  <Route component={FourOhFour} />
                </Switch>
              </div>
            </div>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Home;
