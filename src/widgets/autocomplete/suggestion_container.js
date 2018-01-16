import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

const SuggestionContainer = (props) => {
  const { containerProps, children } = props;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
};

SuggestionContainer.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  containerProps: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
};

export default SuggestionContainer;
