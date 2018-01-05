import React from 'react';
import PropTypes from 'prop-types';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { MenuItem } from 'material-ui/Menu';

const Suggestion = (props) => {
  const { suggestion, query, isHighlighted } = props;

  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          if (part.highlight) {
            return (
              <span key={String(index)} style={{ fontWeight: 300 }}>
                {part.text}
              </span>
            );
          }

          return (
            <strong key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
};

Suggestion.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  suggestion: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  query: PropTypes.string.isRequired,
  isHighlighted: PropTypes.bool.isRequired,
};

export default Suggestion;
