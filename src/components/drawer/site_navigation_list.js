import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import { Link } from 'react-router-dom';

import HomeIcon from 'material-ui-icons/Home';
import ArchiveIcon from 'material-ui-icons/Archive';
import FolderIcon from 'material-ui-icons/Folder';
import DateRangeIcon from 'material-ui-icons/DateRange';
import PersonOutlineIcon from 'material-ui-icons/PersonOutline';
import SettingsIcon from 'material-ui-icons/Settings';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';

const listStyles = theme => ({
  nestedList: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class SiteNavigationList extends Component {
  constructor(props) {
    super(props);

    this.handleArchivesClick = this.handleArchivesClick.bind(this);

    this.state = {
      archivesOpen: false,
    };
  }

  handleArchivesClick() {
    this.setState({ archivesOpen: !this.state.archivesOpen });
  }

  render() {
    const { classes } = this.props;

    return (
      <List>
        <ListItem button component={Link} to="/" onClick={this.props.onClose}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={this.handleArchivesClick}>
          <ListItemIcon>
            <ArchiveIcon />
          </ListItemIcon>
          <ListItemText primary="Archives" />
          { this.state.archivesOpen ? <ExpandLess /> : <ExpandMore /> }
        </ListItem>
        <Collapse component="li" in={this.state.archivesOpen} timeout="auto" unmountOnExit>
          <List>
            <ListItem className={classes.nestedList} button component={Link} to="/archives/date" onClick={this.props.onClose}>
              <ListItemIcon>
                <DateRangeIcon />
              </ListItemIcon>
              <ListItemText primary="Browse by date" />
            </ListItem>
            <ListItem className={classes.nestedList} button component={Link} to="/archives/tags" onClick={this.props.onClose}>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Browse by tag" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button component={Link} to="/about" onClick={this.props.onClose}>
          <ListItemIcon>
            <PersonOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} to="/halloween" onClick={this.props.onClose}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Customize Me" />
        </ListItem>
      </List>
    );
  }
}

SiteNavigationList.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  onClose: PropTypes.func.isRequired,
};

export default withStyles(listStyles, { withTheme: true })(SiteNavigationList);
