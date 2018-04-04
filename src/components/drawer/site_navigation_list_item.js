import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { Link } from 'react-router-dom';

const listStyles = theme => ({
  nestedList: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

const SiteNavigationListItem = (props) => {
  const {
    classes,
    onClose,
    icon,
    text,
    link,
    nested,
  } = props;

  const styling = nested ? {
    className: classes.nestedList,
  } : {};

  return (
    <ListItem {...styling} button component={Link} to={link} onClick={onClose}>
      <ListItemIcon>
        { icon }
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

SiteNavigationListItem.defaultProps = {
  nested: false,
};

SiteNavigationListItem.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  onClose: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
  nested: PropTypes.bool,
};

export default withStyles(listStyles, { withTheme: true })(SiteNavigationListItem);
