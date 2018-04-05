import React from 'react';
import PropTypes from 'prop-types';
import List from 'material-ui/List';

import BookIcon from 'material-ui-icons/Book';

import NavigationListItem from './navigation_list_item';

const ProjectsSection = (props) => {
  const { onClose } = props;

  return (
    <List>
      <NavigationListItem nested onClose={onClose} link="/projects/ccls" icon={<BookIcon />} text="CCLS Android App" />
    </List>
  );
};

ProjectsSection.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ProjectsSection;
