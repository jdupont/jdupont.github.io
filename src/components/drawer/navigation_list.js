import React from 'react';
import PropTypes from 'prop-types';
import List from 'material-ui/List';

import HomeIcon from '@material-ui/icons/Home';
import ArchiveIcon from '@material-ui/icons/Archive';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import WhatshotIcon from '@material-ui/icons/Whatshot';

import ExpandableSection from './expandable_section';
import NavigationListItem from './navigation_list_item';
import ArchivesSection from './archives_section';
import ProjectsSection from './projects_section';

const NavigationList = (props) => {
  const { onClose } = props;

  return (
    <List>
      <NavigationListItem text="Home" icon={<HomeIcon />} link="/" onClose={onClose} />
      <ExpandableSection text="Archives" icon={<ArchiveIcon />} NavigationItemList={ArchivesSection} onClose={onClose} />
      <ExpandableSection text="Projects" icon={<WhatshotIcon />} NavigationItemList={ProjectsSection} onClose={onClose} />
      <NavigationListItem text="About" icon={<PersonOutlineIcon />} link="/about" onClose={onClose} />
      <NavigationListItem text="Customize Me" icon={<SettingsIcon />} link="/halloween" onClose={onClose} />
    </List>
  );
};

NavigationList.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default NavigationList;
