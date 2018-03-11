import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, withTheme } from 'material-ui/styles';

import ThemeEditorPresentation from './theme_editor_presentation';

class ThemeEditorContainer extends React.Component {
  static themeToJson(theme) {
    const json = JSON.stringify(theme, null, 2);
    return json;
  }

  static jsonToTheme(json) {
    return JSON.parse(json);
  }

  constructor(props) {
    super(props);

    const { theme } = props;

    this.state = {
      jsonTheme: ThemeEditorContainer.themeToJson(theme),
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(updatedTheme) {
    this.setState({ jsonTheme: updatedTheme });
  }

  onSubmit() {
    const { onThemeChange } = this.props;
    const { jsonTheme } = this.state;

    const parsed = ThemeEditorContainer.jsonToTheme(jsonTheme);

    const updatedTheme = createMuiTheme({
      ...parsed,
    });

    onThemeChange(updatedTheme);
  }

  render() {
    const { jsonTheme } = this.state;

    return (
      <ThemeEditorPresentation
        jsonTheme={jsonTheme}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    );
  }
}

ThemeEditorContainer.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  theme: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  onThemeChange: PropTypes.func.isRequired,
};

export default withTheme()(ThemeEditorContainer);
