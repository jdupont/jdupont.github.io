import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, { ExpansionPanelSummary, ExpansionPanelDetails } from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemText } from 'material-ui/List';

import BlogDate from '../blog_posts/blog_date';
import QueryLink from '../routing/query_link';
import { filepathToUrlParam } from '../routing/title_to_url_converter';

const contentStyles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  subheading: {
    color: theme.typography.display1.color,
    fontSize: theme.typography.pxToRem(13),
    fontWeight: theme.typography.fontWeightRegular,
    alignSelf: 'center',
  },
  headingRow: {
    display: 'flex',
  },
});

class BlogListPanel extends Component {
  static getListItem(fileName, post) {
    const { title, date } = post.attributes;
    return (
      <ListItem button component={QueryLink} to={{ pathname: '/blogs', query: { title: filepathToUrlParam(fileName) } }} key={title}>
        <ListItemText
          primary={title}
          secondary={<BlogDate date={date} />}
        />
      </ListItem>
    );
  }

  render() {
    const { classes, posts } = this.props;

    posts.sort();

    if (!this.props.chronological) {
      posts.reverse();
    }

    return (
      <ExpansionPanel key={this.props.title}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.headingRow}>
            <Typography className={classes.heading}>{this.props.title}</Typography>
            &nbsp;
            <Typography className={classes.subheading}>{`(${this.props.posts.length} post${this.props.posts.length > 1 ? 's' : ''})`}</Typography>
          </div>
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

BlogListPanel.defaultProps = {
  chronological: true,
};

BlogListPanel.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  title: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    fileName: PropTypes.string,
    posts: PropTypes.arrayOf(PropTypes.object),
  })).isRequired,
  chronological: PropTypes.bool,
};

export default withStyles(contentStyles, { withTheme: true })(BlogListPanel);
