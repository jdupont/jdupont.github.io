import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, { ExpansionPanelSummary, ExpansionPanelDetails } from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemText } from 'material-ui/List';

import QueryLink from '../routing/query_link';
import { filepathToUrlParam } from '../routing/title_to_url_converter';

const contentStyles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

class BlogListPanel extends Component {
  static getListItem(fileName, post) {
    const { title, date } = post.attributes;
    return (
      <ListItem button component={QueryLink} to={{ pathname: '/blogs', query: { title: filepathToUrlParam(fileName) } }} key={title}>
        <ListItemText primary={title} secondary={date} />
      </ListItem>
    );
  }

  render() {
    const { classes, posts } = this.props;

    posts.sort((a, b) => {
      const aDate = a.post.attributes.date;
      const bDate = b.post.attributes.date;

      if (aDate > bDate) {
        return -1;
      } else if (aDate === bDate) {
        return 0;
      }

      return 1;
    });

    return (
      <ExpansionPanel key={this.props.title}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{this.props.title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List>
            {
              posts.map(({ fileName, post }) => BlogListPanel.getListItem(fileName, post))
            }
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

BlogListPanel.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  title: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    fileName: PropTypes.string,
    posts: PropTypes.arrayOf(PropTypes.object),
  })).isRequired,
};

export default withStyles(contentStyles, { withTheme: true })(BlogListPanel);
