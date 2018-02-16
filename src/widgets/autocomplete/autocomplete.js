import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import { withStyles } from 'material-ui/styles';

import AutocompleteInput from './autocomplete_input';
import Suggestion from './suggestion';
import SuggestionContainer from './suggestion_container';

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

const styles = theme => ({
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  textField: {
    width: '100%',
  },
});

class Autocomplete extends Component {
  static getMatchingSuggestions(value, allSuggestions) {
    const inputValue = value.trim().toLowerCase();
    let count = 0;

    return inputValue.length === 0
      ? []
      : allSuggestions.filter((suggestion) => {
        const keep =
          count < 5 && suggestion.label.toLowerCase().slice(0, inputValue.length) === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
  }

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      matchingSuggestions: [],
    };
  }

  fetchSuggestions = ({ value }) => {
    this.setState({
      matchingSuggestions: Autocomplete.getMatchingSuggestions(value, this.props.suggestions),
    });
  };

  clearSuggestions = () => this.setState({ matchingSuggestions: [] });

  handleChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  render() {
    const { classes, onItemSelect, clearOnSelect } = this.props;

    return (
      <Autosuggest
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderInputComponent={AutocompleteInput}
        suggestions={this.state.matchingSuggestions}
        onSuggestionsFetchRequested={this.fetchSuggestions}
        onSuggestionsClearRequested={this.clearSuggestions}
        onSuggestionSelected={((event, { suggestion }) => {
          onItemSelect(suggestion.label);
          if (clearOnSelect) {
            this.setState({ value: '' });
          }
        })}
        renderSuggestionsContainer={SuggestionContainer}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={(suggestion, { query, isHighlighted }) =>
          (<Suggestion suggestion={suggestion} query={query} isHighlighted={isHighlighted} />)}
        inputProps={{
          autoFocus: true,
          classes,
          placeholder: this.props.hint,
          value: this.state.value,
          onChange: this.handleChange,
        }}
      />
    );
  }
}

Autocomplete.defaultProps = {
  clearOnSelect: false,
};

Autocomplete.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  hint: PropTypes.string.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemSelect: PropTypes.func.isRequired,
  clearOnSelect: PropTypes.bool,
};

export default withStyles(styles)(Autocomplete);
