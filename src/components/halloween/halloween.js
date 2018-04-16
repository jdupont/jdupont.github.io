import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import { fullRowWidth, contentRowWidths } from '../../style/dimensions';
import { GridToolbarMargin } from '../../style/grid_styles';
import BlogHelmet from '../blog_helmet';
import ThemeSettingsContainer from './theme_settings_container';

const styles = theme => ({
  halloweenBox: {
    padding: theme.spacing.unit * 2,
  },
});

const Halloween = (props) => {
  const {
    classes,
    onThemeChange,
    onThemeReset,
    theme,
  } = props;

  return (
    <Grid container>
      <GridToolbarMargin />
      <BlogHelmet pageTitle="Customize Me" />
      <Grid item {...fullRowWidth}>
        <Grid container justify="center">
          <Grid item {...contentRowWidths} component={Paper}>
            <Grid container className={classes.halloweenBox} spacing={16}>
              <Grid item {...fullRowWidth}>
                <Typography variant="display3">Customize me!</Typography>
              </Grid>
              <Grid item {...fullRowWidth}>
                <Typography variant="body1">
                  The material-ui library offers a powerful theming
                  solution that lets you change the appearance of your app on the
                  fly. You can use this page to check out some of the properties you can change.
                </Typography>
              </Grid>
              <Grid item {...fullRowWidth}>
                <Divider />
              </Grid>
              <Grid item {...fullRowWidth}>
                <ThemeSettingsContainer
                  theme={theme}
                  onThemeChange={onThemeChange}
                  onThemeReset={onThemeReset}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Halloween.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  onThemeChange: PropTypes.func.isRequired,
  onThemeReset: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(Halloween);
