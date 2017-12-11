import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import BlurbCard from './blog_posts/blurb_card';

const contentStyles = theme => ({
  content: {
    padding: theme.spacing.unit * 2,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginTop: 56,
  },
});

const RecentBlogPosts = (props) => {
  const { classes } = props;

  const postWidth = 7;
  const rowWidth = 12;

  return (
    <Grid
      container
      className={classNames(
        classes.root,
        classes.content,
      )}
    >
      <Grid item xs={rowWidth}>
        <Grid container justify="center">
          <Grid item xs={postWidth}>
            <BlurbCard
              title="My First Post"
              date="12/10/2017"
              preview="This post is awesome and you should definitely read it."
              image={`${process.env.PUBLIC_URL}/images/blog_posts/code_complete_2.jpg`}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={rowWidth}>
        <Grid container justify="center">
          <Grid item xs={postWidth}>
            <BlurbCard
              title="My Second Post"
              date="12/11/2017"
              preview="Also awesome and you should definitely read it too."
              image={`${process.env.PUBLIC_URL}/images/blog_posts/second_post.jpg`}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={rowWidth}>
        <Grid container justify="center">
          <Grid item xs={postWidth}>
            <BlurbCard
              title="My Third Post"
              date="12/12/2017"
              preview="I am a content mill."
              image={`${process.env.PUBLIC_URL}/images/blog_posts/third_post.svg`}
            />
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
};

export default withStyles(contentStyles, { withTheme: true })(RecentBlogPosts);
