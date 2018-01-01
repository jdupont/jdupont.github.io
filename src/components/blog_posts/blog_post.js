import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { emphasize } from 'material-ui/styles/colorManipulator';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import DateRangeIcon from 'material-ui-icons/DateRange';

import BlogDate from './blog_date';
import FourOhFour from '../four_oh_four';
import ChipArray from '../../widgets/chip_array';
import { markdownStyles, marked } from './markdown_styling';
import BlogPostsManager from './blog_posts_manager';
import { fullRowWidth, contentRowWidths } from '../../style/dimensions';
import { topLevelGridStyles } from '../../style/grid_styles';
import { urlParamToFilepath } from '../routing/title_to_url_converter';

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
    padding: theme.spacing.unit * 2,
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

  const manager = new BlogPostsManager();

  let post;
  try {
    post = manager.getPost(urlParamToFilepath(props.query.title));
  } catch (webpackError) {
    return (<FourOhFour />);
  }

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
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar>
                        <DateRangeIcon />
                      </Avatar>
                      &nbsp;
                      <BlogDate className={classes.text} component={Typography} type="subheading" date={post.attributes.date} />
                    </span>
                    <ChipArray tags={post.attributes.tags} />
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
