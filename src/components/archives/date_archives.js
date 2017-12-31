import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { emphasize } from 'material-ui/styles/colorManipulator';
import ExpansionPanel, { ExpansionPanelSummary, ExpansionPanelDetails } from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemText } from 'material-ui/List';

import QueryLink from '../routing/query_link';
import { filepathToUrlParam } from '../routing/title_to_url_converter';
import BlogPostsManager from '../blog_posts/blog_posts_manager';
import { fullRowWidth, contentRowWidths } from '../../style/dimensions';
import { topLevelGridStyles } from '../../style/grid_styles';

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
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

class DateArchives extends Component {
  static getPanelFor(classes, month, posts) {
    return (
      <ExpansionPanel key={month}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{month}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List>
            {
              posts.map(({ fileName, post }) => {
                const { title, date } = post.attributes;
                return (
                  <ListItem button component={QueryLink} to={{ pathname: '/blogs', query: { title: filepathToUrlParam(fileName) } }} key={title}>
                    <ListItemText primary={title} secondary={date} />
                  </ListItem>);
              })
            }
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>);
  }

  static createPanels(groupedByMonth, classes) {
    const panels = [];

    groupedByMonth.forEach((value, key) => {
      const panel = DateArchives.getPanelFor(classes, key, value);
      panels.push(panel);
    });

    return panels;
  }

  render() {
    const { classes } = this.props;

    const manager = new BlogPostsManager();
    //TODO -- STILL NEED TO SORT BY MONTH
    const groupedByMonth = manager.postsByMonth();

    return (
      <Grid
        container
        className={classes.content}
      >
        <Grid item {...fullRowWidth}>
          <Grid container justify="center">
            <Grid item {...contentRowWidths}>
              { DateArchives.createPanels(groupedByMonth, classes) }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

DateArchives.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
};

export default withStyles(contentStyles, { withTheme: true })(DateArchives);
