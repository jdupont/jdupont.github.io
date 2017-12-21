import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import ReactMarkdown from 'react-markdown';

const blogStyles = theme => ({
  content: {
    padding: theme.spacing.unit * 2,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginTop: 56,
  },
});

const BlogPost = (props) => {
  const { classes } = props;

  const rowDimensions = { xs: 12, md: 12, lg: 12 };
  const postDimensions = { xs: 12, md: 10, lg: 7 };


  const allBlogPosts = require.context('!json-loader!front-matter-loader!../../../public/posts/', false, /.md$/);

  const post = allBlogPosts(props.query.title);

  return (
    <Grid
      container
      className={classNames(
        classes.root,
        classes.content,
      )}
    >
      <Grid item>
        <ReactMarkdown source={post.body} />
      </Grid>
    </Grid>
  );
};

BlogPost.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  query: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

export default withStyles(blogStyles, { withTheme: true })(BlogPost);
