import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import { fullRowWidth } from './dimensions';

const toolbarStyles = theme => ({
  toolbar: theme.mixins.toolbar,
});

const UnstyledDivMargin = (props) => {
  const { classes } = props;

  return (
    <div className={classes.toolbar} />
  );
};

UnstyledDivMargin.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
};

const UnstyledGridMargin = (props) => {
  const { classes } = props;

  return (
    <Grid item {...fullRowWidth} className={classes.toolbar} />
  );
};

UnstyledGridMargin.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
};

const DivToolbarMargin = withStyles(toolbarStyles, { withTheme: true })(UnstyledDivMargin);
const GridToolbarMargin = withStyles(toolbarStyles, { withTheme: true })(UnstyledGridMargin);

export { DivToolbarMargin, GridToolbarMargin };
