import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { SketchPicker } from 'react-color';

import { fullRowWidth } from '../../style/dimensions';

const styles = () => ({
  centeredColumn: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const ColorPicker = (props) => {
  const {
    classes,
    label,
    onChange,
    color,
    type,
  } = props;

  return (
    <Grid container>
      <Grid item {...fullRowWidth} className={classes.centeredColumn}>
        <Typography variant="headline" color={type}>
          { label }
        </Typography>
      </Grid>
      <Grid item {...fullRowWidth} className={classes.centeredColumn}>
        <SketchPicker
          disableAlpha
          color={color}
          onChange={onChange}
        />
      </Grid>
    </Grid>
  );
};

ColorPicker.defaultProps = {
  type: 'default',
};

ColorPicker.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(ColorPicker);
