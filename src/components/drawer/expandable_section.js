import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

class ExpandableSection extends React.Component {
  constructor(props) {
    super(props);

    this.onExpansionToggle = this.onExpansionToggle.bind(this);

    this.state = {
      expanded: false,
    };
  }

  onExpansionToggle() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const {
      onClose,
      text,
      icon,
      NavigationItemList,
    } = this.props;
    const { expanded } = this.state;

    return (
      <div>
        <ListItem button onClick={this.onExpansionToggle}>
          <ListItemIcon>
            { icon }
          </ListItemIcon>
          <ListItemText primary={text} />
          { expanded ? <ExpandLess /> : <ExpandMore /> }
        </ListItem>
        <Collapse component="li" in={expanded} timeout="auto" unmountOnExit>
          <NavigationItemList onClose={onClose} />
        </Collapse>
      </div>
    );
  }
}

ExpandableSection.propTypes = {
  onClose: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
  NavigationItemList: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
};

export default ExpandableSection;
