import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, withTheme } from 'material-ui/styles';
import debounce from 'lodash.debounce';

import { generatePaletteFromBase } from '../../style/palette_manipulator';
import ThemeSettingsPresentation from './theme_settings_presentation';

class ThemeSettingsContainer extends React.Component {
  static getDerivedStateFromProps(nextProps) {
    return ThemeSettingsContainer.getStateFromTheme(nextProps.theme);
  }

  static getStateFromTheme(theme) {
    return {
      primary: theme.palette.primary,
      secondary: theme.palette.secondary,
      error: theme.palette.error,
      type: theme.palette.type,
    };
  }

  constructor(props) {
    super(props);

    const { theme } = props;

    this.state = {
      ...ThemeSettingsContainer.getStateFromTheme(theme),
    };

    this.debouncedPrimary = debounce(colorObject =>
      this.onPrimaryChange(generatePaletteFromBase(colorObject.hex)), 150);
    this.debouncedSecondary = debounce(colorObject =>
      this.onSecondaryChange(generatePaletteFromBase(colorObject.hex)), 150);
    this.debouncedError = debounce(colorObject =>
      this.onErrorChange(generatePaletteFromBase(colorObject.hex)), 150);

    this.onTypeChange = this.onTypeChange.bind(this);
    this.recalculateTheme = this.recalculateTheme.bind(this);
  }

  onPrimaryChange(primary) {
    this.setState({ primary }, this.recalculateTheme);
  }

  onSecondaryChange(secondary) {
    this.setState({ secondary }, this.recalculateTheme);
  }

  onErrorChange(error) {
    this.setState({ error }, this.recalculateTheme);
  }

  onTypeChange(type) {
    this.setState({ type }, this.recalculateTheme);
  }

  recalculateTheme() {
    const { onThemeChange } = this.props;

    const {
      primary,
      secondary,
      error,
      type,
    } = this.state;

    const updatedTheme = createMuiTheme({
      palette: {
        type,
        primary,
        secondary,
        error,
      },
    });

    onThemeChange(updatedTheme);
  }

  render() {
    const { onThemeReset } = this.props;

    const {
      primary,
      secondary,
      error,
      type,
    } = this.state;

    return (
      <ThemeSettingsPresentation
        primary={primary}
        secondary={secondary}
        error={error}
        type={type}
        onPrimaryChange={this.debouncedPrimary}
        onSecondaryChange={this.debouncedSecondary}
        onErrorChange={this.debouncedError}
        onTypeChange={this.onTypeChange}
        onThemeReset={onThemeReset}
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
  onThemeReset: PropTypes.func.isRequired,
};

export default withTheme()(ThemeSettingsContainer);
