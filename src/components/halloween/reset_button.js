import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import RestoreIcon from 'material-ui-icons/Restore';

import { leftIcon } from '../../style/buttons';

const styles = theme => ({
  ...leftIcon(theme),
});

const ResetButton = (props) => {
  const { classes, onThemeReset } = props;

  return (
    <Button variant="raised" onClick={onThemeReset}>
      <RestoreIcon className={classes.leftIcon} />
      Restore
    </Button>
  );
};

ResetButton.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  onThemeReset: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResetButton);
