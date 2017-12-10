import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import { withStyles } from 'material-ui/styles';
import MenuIcon from 'material-ui-icons/Menu';
import classNames from 'classnames';

import PersistentDrawer from './persistent_drawer.js';
import { drawerWidth } from '../style/dimensions';

const appBarStyles = theme => ({
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarShiftLeft: {
    marginLeft: drawerWidth,
  },
  hide: {
    display: 'none',
  },
});

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  openDrawer = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div>
          <AppBar className={classNames(classes.appBar, {
              [classes.appBarShift]: this.state.open,
              [classes.appBarShiftLeft]: this.state.open,
            })}
          >
            <Toolbar disableGutters={!this.state.open}>
              <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={this.openDrawer}
                className={classNames(classes.menuButton, this.state.open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" noWrap>
                Jules&#39;s Blog
              </Typography>
            </Toolbar>
          </AppBar>
          <PersistentDrawer open={this.state.open} onClose={() => this.setState({ open: false })} />
          <main>
            <Typography>You think water moves fast? You should see ice.</Typography>
          </main>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
};

export default withStyles(appBarStyles, { withTheme: true })(Home);
