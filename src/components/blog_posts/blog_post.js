import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { emphasize } from 'material-ui/styles/colorManipulator';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import { markdownStyles, marked } from './markdown_styling';
import { fullRowWidth, contentRowWidths } from '../../style/dimensions';
import { topLevelGridStyles } from '../../style/grid_styles';

const blogStyles = theme => ({
  content: {
    ...topLevelGridStyles(theme),
  },
  paddedContent: {
    padding: `0px ${theme.spacing.unit * 3}px`,
  },
  noTopPadding: {
    paddingTop: '0px !important',
  },
  titleRow: {
    padding: theme.spacing.unit * 3,
    background: emphasize(theme.palette.primary[300], 0.26),
    borderRadius: '2px 2px 0px 0px',
  },
  text: {
    color: theme.palette.background.default,
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
            <Paper>
              <Grid container>
                <Grid item {...fullRowWidth} className={classes.noTopPadding}>
                  <div className={classes.titleRow}>
                    <Typography type="display3" className={classes.text}>{post.attributes.title}</Typography>
                    <Typography type="subheading" className={classes.text}>{post.attributes.date}</Typography>
                  </div>
                </Grid>
                <Grid item {...fullRowWidth}>
                  <div
                    className={classnames(classes.paddedContent, classes.markdown)}
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
