import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const AutocompleteText = (props) => {
  const {
    classes, autoFocus, value, ref, ...other
  } = props;

  return (
    <TextField
      autoFocus={autoFocus}
      className={classes.textField}
      value={value}
      inputRef={ref}
      InputProps={{
        classes: {
          input: classes.input,
        },
        ...other,
      }}
    />
  );
};

AutocompleteText.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  ref: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  autoFocus: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default AutocompleteText;
