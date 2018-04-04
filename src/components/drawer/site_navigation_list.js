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
import WhatshotIcon from 'material-ui-icons/Whatshot';
import BookIcon from 'material-ui-icons/Book';

const listStyles = theme => ({
  nestedList: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

const ArchivesSection = (props) => {
  const { classes, onClose } = props;

  return (
    <List>
      <ListItem className={classes.nestedList} button component={Link} to="/archives/date" onClick={onClose}>
        <ListItemIcon>
          <DateRangeIcon />
        </ListItemIcon>
        <ListItemText primary="Browse by date" />
      </ListItem>
      <ListItem className={classes.nestedList} button component={Link} to="/archives/tags" onClick={onClose}>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Browse by tag" />
      </ListItem>
    </List>
  );
};

ArchivesSection.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  onClose: PropTypes.func.isRequired,
};

const ProjectsSection = (props) => {
  const { classes, onClose } = props;

  return (
    <List>
      <ListItem className={classes.nestedList} button component={Link} to="/projects/ccls" onClick={onClose}>
        <ListItemIcon>
          <BookIcon />
        </ListItemIcon>
        <ListItemText primary="CCLS Android App" />
      </ListItem>
    </List>
  );
};

ProjectsSection.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  onClose: PropTypes.func.isRequired,
};

class SiteNavigationList extends Component {
  constructor(props) {
    super(props);

    this.handleArchivesClick = this.handleArchivesClick.bind(this);
    this.handleProjectsClick = this.handleProjectsClick.bind(this);

    this.state = {
      archivesOpen: false,
      projectsOpen: false,
    };
  }

  handleArchivesClick() {
    this.setState({ archivesOpen: !this.state.archivesOpen });
  }

  handleProjectsClick() {
    this.setState({ projectsOpen: !this.state.projectsOpen });
  }

  render() {
    const { classes, onClose } = this.props;

    return (
      <List>
        <ListItem button component={Link} to="/" onClick={onClose}>
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
          <ArchivesSection classes={classes} onClose={onClose} />
        </Collapse>
        <ListItem button onClick={this.handleProjectsClick}>
          <ListItemIcon>
            <WhatshotIcon />
          </ListItemIcon>
          <ListItemText primary="Projects" />
          { this.state.projectsOpen ? <ExpandLess /> : <ExpandMore /> }
        </ListItem>
        <Collapse component="li" in={this.state.projectsOpen} timeout="auto" unmountOnExit>
          <ProjectsSection classes={classes} onClose={onClose} />
        </Collapse>
        <ListItem button component={Link} to="/about" onClick={onClose}>
          <ListItemIcon>
            <PersonOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} to="/halloween" onClick={onClose}>
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
