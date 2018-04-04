import React from 'react';
import PropTypes from 'prop-types';
import List from 'material-ui/List';

import FolderIcon from 'material-ui-icons/Folder';
import DateRangeIcon from 'material-ui-icons/DateRange';

import SiteNavigationListItem from './site_navigation_list_item';

const ArchivesSection = (props) => {
  const { onClose } = props;

  return (
    <List>
      <SiteNavigationListItem nested onClose={onClose} link="/archives/date" icon={<DateRangeIcon />} text="Browse by date" />
      <SiteNavigationListItem nested onClose={onClose} link="/archives/tags" icon={<FolderIcon />} text="Browse by tag" />
    </List>
  );
};

ArchivesSection.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ArchivesSection;
