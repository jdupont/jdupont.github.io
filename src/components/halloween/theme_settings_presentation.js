import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import LightbulbOutlineIcon from 'material-ui-icons/LightbulbOutline';

const LightSwitch = (props) => {
  const { type, onTypeChange } = props;

  if (type === 'light') {
    return (
      <Button variant="raised" onClick={() => onTypeChange('dark')}>
        <LightbulbOutlineIcon />
        Go Dark
      </Button>
    );
  }

  return (
    <Button variant="raised" onClick={() => onTypeChange('light')}>
      <LightbulbOutlineIcon />
       Go Light
    </Button>
  );
};

LightSwitch.propTypes = {
  type: PropTypes.string.isRequired,
  onTypeChange: PropTypes.func.isRequired,
};

const styles = {

};

const ThemeSettingsPresentation = (props) => {
  const {
    primary,
    secondary,
    type,
    onPrimaryChange,
    onSecondaryChange,
    onTypeChange,
  } = props;

  return (
    <LightSwitch type={type} onTypeChange={onTypeChange} />
  );
};

ThemeSettingsPresentation.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  primary: PropTypes.object.isRequired,
  secondary: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  type: PropTypes.string.isRequired,
  onPrimaryChange: PropTypes.func.isRequired,
  onSecondaryChange: PropTypes.func.isRequired,
  onTypeChange: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(ThemeSettingsPresentation);
