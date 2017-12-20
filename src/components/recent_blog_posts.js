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

  const rowDimensions = { xs: 12, md: 12, lg: 12 };
  const postDimensions = { xs: 12, md: 10, lg: 7 };

  const webpackRequireContext = require.context('!json-loader!front-matter-loader!../../public/posts/', false, /.md$/);
  console.log(webpackRequireContext);
  const test = webpackRequireContext(webpackRequireContext.keys()[0]);
  console.log(test);
  //const blogs = webpackRequireContext.keys().reduce((memo, fileName) => memo.set(fileName.match(/.\/([^.]+).*/)[1], webpackRequireContext(fileName)), new Map());
  // const blogIndex = (blogs) => () => <ul>{[...blogs.keys()].map(path => <li key={path}><Link to={'/'+path}>{blogs.get(path).title || path}</Link></li>)}</ul>;

  // const blogs = webpackRequireContext.keys().map(fileName => webpackRequireContext(fileName));
  // const testPost = require.context('../../public/posts/', false);

  // console.log(testPost);
  // console.log(blogs.get([...blogs.keys()][0]));

  return (
    <Grid
      container
      className={classNames(
        classes.root,
        classes.content,
      )}
    >
      <Grid item {...rowDimensions}>
        <Grid container justify="center">
          <Grid item {...postDimensions}>
            <BlurbCard
              title="My First Post"
              date="12/10/2017"
              preview="This post is awesome and you should definitely read it."
              image={`${process.env.PUBLIC_URL}/images/blog_posts/code_complete_2.jpg`}
            />

          </Grid>
        </Grid>
      </Grid>
      <Grid item {...rowDimensions}>
        <Grid container justify="center">
          <Grid item {...postDimensions}>
            <BlurbCard
              title="My Second Post"
              date="12/11/2017"
              preview="Also awesome and you should definitely read it too."
              image={`${process.env.PUBLIC_URL}/images/blog_posts/second_post.jpg`}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item {...rowDimensions}>
        <Grid container justify="center">
          <Grid item {...postDimensions}>
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
