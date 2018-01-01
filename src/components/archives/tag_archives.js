import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { emphasize } from 'material-ui/styles/colorManipulator';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import BlogListPanel from './blog_list_panel';
import BlogPostsManager from '../blog_posts/blog_posts_manager';
import Autocomplete from '../../widgets/autocomplete';
import { fullRowWidth, contentRowWidths } from '../../style/dimensions';
import { topLevelGridStyles } from '../../style/grid_styles';

const suggestions = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
];

const contentStyles = theme => ({
  content: {
    ...topLevelGridStyles(theme),
  },
  titleRow: {
    padding: theme.spacing.unit * 2,
    background: emphasize(theme.palette.primary[300], 0.26),
    borderRadius: '2px 2px 0px 0px',
  },
  text: {
    color: theme.palette.background.default,
  },
});

class TagArchives extends Component {
  static createTagPanels(groupedByTag) {
    const panels = [];

    const tagGroups = [...groupedByTag].sort();

    tagGroups.forEach((tagGroup) => {
      const tag = tagGroup[0];
      const posts = tagGroup[1];
      panels.push((<BlogListPanel key={tag} title={tag} posts={posts} />));
    });

    return panels;
  }

  render() {
    const { classes } = this.props;

    const manager = new BlogPostsManager();
    const groupedByTag = manager.postsByTag();

    return (
      <Grid
        container
        className={classes.content}
      >
        <Grid item {...fullRowWidth}>
          <Grid container justify="center">
            <Grid item {...contentRowWidths} component={Paper}>
              <Grid container>
                <Grid item {...fullRowWidth}>
                  <div className={classes.titleRow}>
                    <Typography type="display3" className={classes.text}>Welcome to the Archives</Typography>
                  </div>
                </Grid>
                <Grid item {...fullRowWidth}>
                  <Autocomplete hint="Start typing to add tags" suggestions={suggestions} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item {...contentRowWidths}>
              { TagArchives.createTagPanels(groupedByTag) }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

TagArchives.defaultProps = {
  tags: [],
};

TagArchives.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default withStyles(contentStyles, { withTheme: true })(TagArchives);
