import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import LightbulbOutlineIcon from 'material-ui-icons/LightbulbOutline';

import { leftIcon } from '../../style/buttons';

const styles = theme => ({
  ...leftIcon(theme),
});

const LightSwitch = (props) => {
  const { classes, type, onTypeChange } = props;

  if (type === 'light') {
    return (
      <Button variant="raised" onClick={() => onTypeChange('dark')}>
        <LightbulbOutlineIcon className={classes.leftIcon} />
        Go Dark
      </Button>
    );
  }

  return (
    <Button variant="raised" onClick={() => onTypeChange('light')}>
      <LightbulbOutlineIcon className={classes.leftIcon} />
        Fiat Lux
    </Button>
  );
};

LightSwitch.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  type: PropTypes.string.isRequired,
  onTypeChange: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(LightSwitch);
