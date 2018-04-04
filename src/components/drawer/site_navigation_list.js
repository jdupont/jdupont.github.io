import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';

import HomeIcon from 'material-ui-icons/Home';
import ArchiveIcon from 'material-ui-icons/Archive';
import PersonOutlineIcon from 'material-ui-icons/PersonOutline';
import SettingsIcon from 'material-ui-icons/Settings';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import WhatshotIcon from 'material-ui-icons/Whatshot';

import SiteNavigationListItem from './site_navigation_list_item';
import ArchivesSection from './archives_section';
import ProjectsSection from './projects_section';

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
    const { onClose } = this.props;

    return (
      <List>
        <SiteNavigationListItem onClose={onClose} link="/" icon={<HomeIcon />} text="Home" />
        <ListItem button onClick={this.handleArchivesClick}>
          <ListItemIcon>
            <ArchiveIcon />
          </ListItemIcon>
          <ListItemText primary="Archives" />
          { this.state.archivesOpen ? <ExpandLess /> : <ExpandMore /> }
        </ListItem>
        <Collapse component="li" in={this.state.archivesOpen} timeout="auto" unmountOnExit>
          <ArchivesSection onClose={onClose} />
        </Collapse>
        <ListItem button onClick={this.handleProjectsClick}>
          <ListItemIcon>
            <WhatshotIcon />
          </ListItemIcon>
          <ListItemText primary="Projects" />
          { this.state.projectsOpen ? <ExpandLess /> : <ExpandMore /> }
        </ListItem>
        <Collapse component="li" in={this.state.projectsOpen} timeout="auto" unmountOnExit>
          <ProjectsSection onClose={onClose} />
        </Collapse>
        <SiteNavigationListItem onClose={onClose} link="/about" icon={<PersonOutlineIcon />} text="About" />
        <SiteNavigationListItem onClose={onClose} link="/halloween" icon={<SettingsIcon />} text="Customize Me" />
      </List>
    );
  }
}

SiteNavigationList.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SiteNavigationList;
