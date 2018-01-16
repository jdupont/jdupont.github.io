import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';

import 'typeface-kaushan-script';

import SiteNavigationList from './site_navigation_list';

import { drawerWidth } from '../../style/dimensions';

const font = 'Kaushan Script';

const drawerStyles = theme => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    height: '100%',
    width: drawerWidth,
  },
  logoFont: {
    fontFamily: font,
  },
  chevron: {
    position: 'absolute',
    right: `calc(100% - ${drawerWidth}px)`,
  },
});

const PersistentDrawer = props => (
  <Drawer
    type="temporary"
    open={props.open}
    classes={{ paper: props.classes.drawerPaper }}
    onClose={props.onClose}
  >
    <div>
      <div>
        <div className={props.classes.drawerHeader}>
          <div>
            <Typography type="title" color="accent" className={props.classes.logoFont}>JD</Typography>
          </div>
          <IconButton onClick={props.onClose} className={props.classes.chevron}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <SiteNavigationList onClose={props.onClose} />
      </div>
    </div>
  </Drawer>
);

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

export default withStyles(drawerStyles, { withTheme: true })(PersistentDrawer);
