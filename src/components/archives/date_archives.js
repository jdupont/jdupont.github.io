import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { emphasize } from 'material-ui/styles/colorManipulator';
import Grid from 'material-ui/Grid';

import BlogPostsManager from '../blog_posts/blog_posts_manager';
import MonthPanel from './month_panel';
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
});

class DateArchives extends Component {
  static monthName(twoDigitMonth) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];

    return monthNames[parseInt(twoDigitMonth, 10)];
  }

  static createPanels(groupedByMonth) {
    const panels = [];

    const sorted = [...groupedByMonth].sort().reverse();

    sorted.forEach((monthGroup) => {
      const key = monthGroup[0];
      const posts = monthGroup[1];
      const year = key.split('-')[0];
      const month = DateArchives.monthName(key.split('-')[1]);
      const monthYear = `${month} ${year}`;
      panels.push((<MonthPanel key={monthYear} monthYear={monthYear} posts={posts} />));
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
              { DateArchives.createPanels(groupedByMonth) }
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
