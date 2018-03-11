import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const ThemeEditorPresentation = (props) => {
  const { jsonTheme, onChange, onSubmit } = props;

  return (
    <div>
      <Button onClick={onSubmit}>
        Submit
      </Button>
      <TextField
        fullWidth
        multiline
        value={jsonTheme}
        onChange={event => onChange(event.target.value)}
      />
    </div>
  );
};

ThemeEditorPresentation.propTypes = {
  jsonTheme: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ThemeEditorPresentation;
