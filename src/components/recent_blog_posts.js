import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import { drawerWidth } from '../style/dimensions';

const contentStyles = theme => ({
  contentLeft: {
    marginLeft: drawerWidth,
  },
  content: {
    width: '100%',
    padding: theme.spacing.unit * 2,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginTop: 56,
    background: theme.palette.background.default,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  contentShiftLeft: {
    marginLeft: 0,
  },
});

const RecentBlogPosts = (props) => {
  const { classes } = props;

  return (
    <main className={classNames(
      classes.content,
      classes.contentLeft, {
        [classes.contentShift]: props.open,
        [classes.contentShiftLeft]: !props.open,
      },
    )}
    >
      <Typography>You think water moves fast? You should see ice.</Typography>
    </main>
  );
};

RecentBlogPosts.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  open: PropTypes.bool.isRequired,
};

export default withStyles(contentStyles, { withTheme: true })(RecentBlogPosts);
