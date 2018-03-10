import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, withTheme } from 'material-ui/styles';

import ThemeSettingsPresentation from './theme_settings_presentation';

class ThemeSettingsContainer extends React.Component {
  constructor(props) {
    super(props);

    const { theme } = props;

    this.state = {
      primary: theme.palette.primary,
      secondary: theme.palette.secondary,
      type: theme.palette.type,
    };

    this.onPrimaryChange = this.onPrimaryChange.bind(this);
    this.onSecondaryChange = this.onSecondaryChange.bind(this);
    this.onTypeChange = this.onTypeChange.bind(this);
    this.recalculateTheme = this.recalculateTheme.bind(this);
  }

  onPrimaryChange(primary) {
    this.setState({ primary }, this.recalculateTheme);
  }

  onSecondaryChange(secondary) {
    this.setState({ secondary }, this.recalculateTheme);
  }

  onTypeChange(type) {
    this.setState({ type }, this.recalculateTheme);
  }

  recalculateTheme() {
    const { onThemeChange } = this.props;

    const {
      primary,
      secondary,
      type,
    } = this.state;

    const updatedTheme = createMuiTheme({
      palette: {
        type,
        primary,
        secondary,
      },
    });

    onThemeChange(updatedTheme);
  }

  render() {
    const {
      primary,
      secondary,
      type,
    } = this.state;

    return (
      <ThemeSettingsPresentation
        primary={primary}
        secondary={secondary}
        type={type}
        onPrimaryChange={this.onPrimaryChange}
        onSecondaryChange={this.onSecondaryChange}
        onTypeChange={this.onTypeChange}
      />
    );
  }
}

ThemeSettingsContainer.propTypes = {
  theme: PropTypes.shape({
    palette: PropTypes.shape({
      primary: PropTypes.object.isRequired,
      secondary: PropTypes.object.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onThemeChange: PropTypes.func.isRequired,
};

export default withTheme()(ThemeSettingsContainer);
