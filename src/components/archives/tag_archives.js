import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { emphasize } from 'material-ui/styles/colorManipulator';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import { linkStringification } from '../routing/query_link';
import { history } from '../../widgets/react_router_prop_types';
import BlogListPanel from './blog_list_panel';
import BlogPostsManager from '../blog_posts/blog_posts_manager';
import Autocomplete from '../../widgets/autocomplete';
import TagFilterCloud from './tag_filter_cloud';
import { fullRowWidth, contentRowWidths } from '../../style/dimensions';
import { topLevelGridStyles } from '../../style/grid_styles';

const contentStyles = theme => ({
  content: {
    ...topLevelGridStyles(theme),
  },
  titleRow: {
    padding: `${2 * theme.spacing.unit}px ${theme.spacing.unit}px ${2 * theme.spacing.unit}px ${2 * theme.spacing.unit}px`,
    background: emphasize(theme.palette.primary[300], 0.26),
    display: 'flex',
  },
  text: {
    color: theme.palette.background.default,
    alignSelf: 'center',
  },
  titleAction: {
    marginLeft: 'auto',
  },
  noMatches: {
    padding: theme.spacing.unit,
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

  static createPostList(classes, tags, posts) {
    if (posts.length > 0) {
      return (
        <BlogListPanel key={tags} title={tags.join(', ')} posts={posts} />
      );
    }

    return (
      <Paper className={classes.noMatches}>
        <Typography>No matching posts found.</Typography>
      </Paper>
    );
  }

  static packageTags(tags, historyManager) {
    return tags.map(tag => ({
      tagName: tag,
      onDelete: () => TagArchives.removeTagFromParameters(tags, tag, historyManager),
    }));
  }

  static removeTagFromParameters(tags, tagToRemove, historyManager) {
    const updatedTags = tags.filter(tag => tagToRemove !== tag);
    historyManager.push({
      search: linkStringification({ tags: updatedTags }),
    });
  }

  static addTagToParameters(tags, tagToAdd, historyManager) {
    tags.push(tagToAdd);
    historyManager.push({
      search: linkStringification({ tags }),
    });
  }

  render() {
    const { classes } = this.props;
    const { tags } = this.props.query;

    const tagFilterActive = tags && tags.length > 0;

    const manager = new BlogPostsManager();

    const allAvailableTags = [];
    manager.allTags().forEach(tag => allAvailableTags.push({ label: tag }));

    let selectedTagsDisplay;

    if (tagFilterActive) {
      selectedTagsDisplay = (
        <TagFilterCloud tags={TagArchives.packageTags(tags, this.props.history)} />
      );
    } else {
      selectedTagsDisplay = (<Typography type="subheading">No filters selected.</Typography>);
    }

    return (
      <Grid
        container
        className={classes.content}
      >
        <Grid item {...fullRowWidth}>
          <Grid container justify="center">
            <Grid item {...contentRowWidths}>
              <Paper>
                <Grid container>
                  <Grid item {...fullRowWidth}>
                    <div className={classes.titleRow}>
                      <Typography className={classes.text} type="headline">Browse by tags</Typography>
                    </div>
                  </Grid>
                  <Grid item {...fullRowWidth}>
                    <Autocomplete
                      hint="Start typing to add tag filters"
                      suggestions={allAvailableTags}
                      onSelect={selectedItem =>
                        TagArchives.addTagToParameters(
                          tags || [],
                          selectedItem,
                          this.props.history,
                        )}
                    />
                  </Grid>
                  <Grid item {...fullRowWidth}>
                    { selectedTagsDisplay }
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item {...contentRowWidths}>
              { tagFilterActive ?
                TagArchives.createPostList(classes, tags, manager.postsMatchingTags(tags)) :
                TagArchives.createTagPanels(manager.postsByTag()) }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

TagArchives.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  query: PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  // eslint-disable-next-line react/no-typos
  history: history.isRequired,
};

export default withRouter(withStyles(contentStyles, { withTheme: true })(TagArchives));
