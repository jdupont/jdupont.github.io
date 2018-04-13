import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import withStyles from 'material-ui/styles/withStyles';

const styles = theme => ({
  dot: {
    width: 8,
    height: 8,
    background: theme.palette.background.paper,
    transition: 'all 400ms cubic-bezier(0.4, 0.0, 0.2, 1)',
    borderRadius: 4,
  },
});

const Dot = (props) => {
  const { classes, ...other } = props;

  return (
    <Paper
      elevation={0}
      className={classes.dot}
      {...other}
    />
  );
};

Dot.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
};

export default withStyles(styles, { withTheme: true })(Dot);
