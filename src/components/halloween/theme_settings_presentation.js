import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import { getMainColor } from '../../style/palette_manipulator';
import { fullRowWidth } from '../../style/dimensions';
import ResetButton from './reset_button';
import LightSwitch from './light_switch';
import ColorPicker from './color_picker';

const styles = theme => ({
  centeredColumn: {
    display: 'flex',
    justifyContent: 'center',
  },
  rightJustifiedColumn: {
    display: 'flex',
    justifyContent: 'right',
  },
  buttonSpacing: {
    marginRight: theme.spacing.unit,
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

  const pickerWidths = {
    xs: 12,
    sm: 4,
  };

  return (
    <Grid container spacing={16}>
      <Grid item {...fullRowWidth} className={classes.rightJustifiedColumn}>
        <LightSwitch type={type} onTypeChange={onTypeChange} className={classes.buttonSpacing} />
        &nbsp;
        <ResetButton onThemeReset={onThemeReset} />
      </Grid>
      <Grid item {...pickerWidths} className={classes.centeredColumn}>
        <ColorPicker label="Primary Color" color={getMainColor(primary)} onChange={onPrimaryChange} type="primary" />
      </Grid>
      <Grid item {...pickerWidths} className={classes.centeredColumn}>
        <ColorPicker label="Secondary Color" color={getMainColor(secondary)} onChange={onSecondaryChange} type="secondary" />
      </Grid>
      <Grid item {...pickerWidths} className={classes.centeredColumn}>
        <ColorPicker label="Error Color" color={getMainColor(error)} onChange={onErrorChange} type="error" />
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
