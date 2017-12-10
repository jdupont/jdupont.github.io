import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import { drawerWidth } from '../style/dimensions';
import BlogPostCard from './blog_post_card';

const contentStyles = theme => ({
  contentLeft: {
    marginLeft: drawerWidth,
  },
  content: {
    padding: theme.spacing.unit * 2,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginTop: 56,
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
    <Grid
      container
      className={classNames(
        classes.root,
        classes.content,
        classes.contentLeft, {
          [classes.contentShift]: props.open,
          [classes.contentShiftLeft]: !props.open,
        },
      )}
      alignItems="center"
    >
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item xs={9}>
            <BlogPostCard title="My First Post" date="12/10/2017" preview="This post is awesome and you should definitely read it." />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item xs={9}>
            <BlogPostCard title="My Second Post" date="12/11/2017" preview="Also awesome and you should definitely read it too." />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item xs={9}>
            <BlogPostCard title="My Third Post" date="12/12/2017" preview="I am a content mill." />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

RecentBlogPosts.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  open: PropTypes.bool.isRequired,
};

export default withStyles(contentStyles, { withTheme: true })(RecentBlogPosts);
