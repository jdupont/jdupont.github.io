import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import HomeIcon from 'material-ui-icons/Home';
import FolderIcon from 'material-ui-icons/Folder';
import PersonOutlineIcon from 'material-ui-icons/PersonOutline';

import { drawerWidth } from '../style/dimensions';

const drawerStyles = () => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  drawerPaper: {
    height: '100%',
    width: drawerWidth,
  },
});

const PersistentDrawer = (props) => {
  const contactsList = (
    <List>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Archives" />
      </ListItem>
    </List>
  );

  const aboutList = (
    <List>
      <ListItem button>
        <ListItemIcon>
          <PersonOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
    </List>
  );

  return (
    <Drawer
      type="persistent"
      open={props.open}
      classes={{ paper: props.classes.drawerPaper }}
    >
      <div>
        <div>
          <div className={props.classes.drawerHeader}>
            <Typography type="title">Jules&#39;s Blog</Typography>
            <IconButton onClick={props.onClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          {contactsList}
          <Divider />
          {aboutList}
        </div>
      </div>
    </Drawer>
  );
};

PersistentDrawer.defaultProps = {
  open: false,
};

PersistentDrawer.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

export default withStyles(drawerStyles)(PersistentDrawer);
