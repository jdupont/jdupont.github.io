import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';

function renderInput(inputProps) {
  const {
    classes,
    autoFocus,
    value,
    ref,
    ...other
  } = inputProps;

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
}

function renderSuggestion(params) {
  const {
    suggestion,
    index,
    itemProps,
    highlightedIndex,
    selectedItem,
  } = params;
  const isHighlighted = highlightedIndex === index;
  const isSelected = selectedItem === suggestion.label;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected
          ? 400
          : 500,
      }}
    >
      {suggestion.label}
    </MenuItem>
  );
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}

const styles = {
  container: {
    flexGrow: 1,
    height: 200,
  },
  textField: {
    width: '100%',
  },
};

class Autocomplete extends Component {
  static getSuggestions(suggestions, inputValue) {
    let count = 0;

    return suggestions.filter((suggestion) => {
      const keep =
        (!inputValue || suggestion.label.toLowerCase().includes(inputValue.toLowerCase())) &&
        count < 5;

      if (keep) {
        count += 1;
      }

      return keep;
    });
  }

  render() {
    const { classes, hint, suggestions, onSelect } = this.props;

    return (
      <Downshift
        render={({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue,
          selectedItem,
          highlightedIndex,
        }) => (
          <div className={classes.container}>
            {renderInput(getInputProps({
                classes,
                placeholder: hint,
                id: 'integration-downshift',
              }))}
            {isOpen
              ? renderSuggestionsContainer({
                  children: Autocomplete.getSuggestions(suggestions, inputValue)
                  .map((suggestion, index) =>
                    renderSuggestion({
                      suggestion,
                      index,
                      itemProps: getItemProps({ item: suggestion.label }),
                      highlightedIndex,
                      selectedItem,
                    })),
                  })
              : null}
          </div>
        )}
        onSelect={onSelect}
      />
    );
  }
}

Autocomplete.defaultProps = {
  hint: 'Start typing to see suggestions',
};

Autocomplete.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  hint: PropTypes.string,
  suggestions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
  })).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default withStyles(styles)(Autocomplete);
