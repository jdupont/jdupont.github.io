import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { emphasize } from 'material-ui/styles/colorManipulator';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import SwapVertIcon from 'material-ui-icons/SwapVert';

import BlogPostsManager from '../blog_posts/blog_posts_manager';
import MonthPanel from './month_panel';
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
});

class DateArchives extends Component {
  static monthName(twoDigitMonth) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];

    return monthNames[parseInt(twoDigitMonth, 10)];
  }

  static createPanels(groupedByMonth, sortChronologically) {
    const panels = [];

    let sorted = [...groupedByMonth].sort();

    if (!sortChronologically) {
      sorted = sorted.reverse();
    }

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

  constructor(props) {
    super(props);

    this.state = { chronological: false };
  }

  render() {
    const { classes } = this.props;

    const manager = new BlogPostsManager();
    const groupedByMonth = manager.postsByMonth();

    return (
      <Grid container className={classes.content}>
        <Grid item {...fullRowWidth}>
          <Grid container justify="center">
            <Grid item {...contentRowWidths}>
              <Paper className={classes.titleRow}>
                <Typography className={classes.text} type="headline">Browse by date</Typography>
                <IconButton
                  className={classes.titleAction}
                  color="accent"
                  onClick={() => { this.setState({ chronological: !this.state.chronological }); }}
                >
                  <SwapVertIcon />
                </IconButton>
              </Paper>
              { DateArchives.createPanels(groupedByMonth, this.state.chronological) }
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
