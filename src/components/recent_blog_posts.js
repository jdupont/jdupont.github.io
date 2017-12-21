import React, { Component } from 'react';
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

class RecentBlogPosts extends Component {
  static createBlurb(postFileName, post) {
    return (
      <BlurbCard
        key={postFileName}
        title={post.attributes.title}
        date={post.attributes.date}
        preview={post.attributes.description}
        image={`${process.env.PUBLIC_URL}/images/blog_posts/${post.attributes.coverImage}`}
        link={{ pathname: '/blogs', query: { title: postFileName } }}
      />
    );
  }

  static wrapInGrid(item, uniqueKey) {
    const rowDimensions = { xs: 12, md: 12, lg: 12 };
    const postDimensions = { xs: 12, md: 10, lg: 7 };

    return (
      <Grid key={uniqueKey} item {...rowDimensions}>
        <Grid key={uniqueKey} container justify="center">
          <Grid key={uniqueKey} item {...postDimensions}>
            {item}
          </Grid>
        </Grid>
      </Grid>
    );
  }

  static getBlogPosts() {
    const blogPosts = require.context('!json-loader!front-matter-loader!../../public/posts/', true, /.md$/);
    return blogPosts;
  }

  render() {
    const { classes } = this.props;

    const blogPosts = RecentBlogPosts.getBlogPosts();

    return (
      <Grid
        container
        className={classNames(
          classes.root,
          classes.content,
        )}
      >
        {blogPosts.keys().map((fileName) => {
          const post = blogPosts(fileName);
          const blurbCard = RecentBlogPosts.createBlurb(fileName, post);
          return RecentBlogPosts.wrapInGrid(blurbCard, fileName);
        })}
      </Grid>
    );
  }
}

RecentBlogPosts.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
};

export default withStyles(contentStyles, { withTheme: true })(RecentBlogPosts);
