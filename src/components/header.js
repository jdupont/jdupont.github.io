import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import MenuIcon from 'material-ui-icons/Menu';

import { BLOG_NAME } from '../docs/blog_constants';
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

const Header = (props) => {
  const { classes } = props;

  return (
    <AppBar className={classNames(classes.appBar, {
        [classes.appBarShift]: props.open,
        [classes.appBarShiftLeft]: props.open,
      })}
    >
      <Toolbar disableGutters={!props.open}>
        <IconButton
          color="contrast"
          aria-label="open drawer"
          onClick={props.onMenuClick}
          className={classNames(classes.menuButton, props.open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit" noWrap>
          {BLOG_NAME}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  open: PropTypes.bool.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};

export default withStyles(appBarStyles, { withTheme: true })(Header);
