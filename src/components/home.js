import React, { Component } from 'react';
import Typography from 'material-ui/Typography';

import Header from './header.js';
import PersistentDrawer from './persistent_drawer.js';

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
        <div>
          <Header open={this.state.open} onMenuClick={() => this.setState({ open: true })} />
          <PersistentDrawer open={this.state.open} onClose={() => this.setState({ open: false })} />
          <main>
            <Typography>You think water moves fast? You should see ice.</Typography>
          </main>
        </div>
      </div>
    );
  }
}

export default Home;
