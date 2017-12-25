import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { emphasize } from 'material-ui/styles/colorManipulator';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import { markdownStyles, marked } from './markdown_styling';
import { fullRowWidth, contentRowWidths } from '../../style/dimensions';

const blogStyles = theme => ({
  content: {
    padding: theme.spacing.unit * 2,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginTop: 56,
  },
  paddedContent: {
    padding: theme.spacing.unit * 3,
  },
  titleRow: {
    background: emphasize(theme.palette.primary[300], 0.26),
    flexGrow: 1,
  },
  markdown: markdownStyles(theme),
});

const BlogPost = (props) => {
  const { classes } = props;

  const allBlogPosts = require.context('!json-loader!front-matter-loader!../../../public/posts/', false, /.md$/);

  const post = allBlogPosts(props.query.title);

  return (
    <Grid
      container
      className={classes.content}
      style={{ justifyContent: 'centered' }}
    >
      <Grid item {...fullRowWidth}>
        <Grid container justify="center">
          <Grid item {...contentRowWidths}>
            <Paper className={classes.paddedContent}>
              <Grid container>
                <Grid item {...fullRowWidth} className={classes.titleRow}>
                  <Typography type="display1">{post.attributes.title}</Typography>
                </Grid>
                <Grid item {...fullRowWidth}>
                  <div
                    className={classes.markdown}
                    /* eslint-disable react/no-danger */
                    dangerouslySetInnerHTML={{ __html: marked(post.body) }}
                    /* eslint-ensable react/no-danger */
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
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
