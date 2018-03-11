import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import SketchPicker from 'react-color';

import { getMainColor } from '../../style/palette_manipulator';
import { fullRowWidth } from '../../style/dimensions';
import ResetButton from './reset_button';
import LightSwitch from './light_switch';

const styles = () => ({
  centeredColumn: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const ThemeSettingsPresentation = (props) => {
  const {
    classes,
    primary,
    secondary,
    error,
    onPrimaryChange,
    onSecondaryChange,
    onErrorChange,
    type,
    onTypeChange,
    onThemeReset,
  } = props;

  return (
    <Grid container>
      <Grid item {...fullRowWidth}>
        <LightSwitch type={type} onTypeChange={onTypeChange} />
        &nbsp;
        <ResetButton onThemeReset={onThemeReset} />
      </Grid>
      <Grid item xs={4} className={classes.centeredColumn}>
        <SketchPicker
          color={getMainColor(primary)}
          onChange={onPrimaryChange}
        />
      </Grid>
      <Grid item xs={4} className={classes.centeredColumn}>
        <SketchPicker
          color={getMainColor(secondary)}
          onChange={onSecondaryChange}
        />
      </Grid>
      <Grid item xs={4} className={classes.centeredColumn}>
        <SketchPicker
          color={getMainColor(error)}
          onChange={onErrorChange}
        />
      </Grid>
    </Grid>
  );
};

ThemeSettingsPresentation.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  primary: PropTypes.object.isRequired,
  secondary: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  type: PropTypes.string.isRequired,
  onPrimaryChange: PropTypes.func.isRequired,
  onSecondaryChange: PropTypes.func.isRequired,
  onErrorChange: PropTypes.func.isRequired,
  onTypeChange: PropTypes.func.isRequired,
  onThemeReset: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(ThemeSettingsPresentation);
