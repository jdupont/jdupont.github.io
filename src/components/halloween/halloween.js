import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import { fullRowWidth, contentRowWidths } from '../../style/dimensions';
import { topLevelGridStyles } from '../../style/grid_styles';
import BlogHelmet from '../blog_helmet';
import ThemeSettingsContainer from './theme_settings_container';

const styles = theme => ({
  content: {
    ...topLevelGridStyles(theme),
  },
});

const Halloween = (props) => {
  const {
    classes,
    onThemeChange,
    onThemeReset,
    theme,
  } = props;

  console.log(`Halloween Theme: ${theme.palette.type}`);

  return (
    <Grid
      container
      className={classes.content}
    >
      <BlogHelmet pageTitle="Halloween" />
      <Grid item {...fullRowWidth}>
        <Grid container justify="center">
          <Grid item {...contentRowWidths} component={Paper}>
            <Grid container className={classes.aboutMeBox}>
              <Grid item {...fullRowWidth}>
                <Typography variant="display3">It is Halloween! Check out my costumes.</Typography>
              </Grid>
              <Grid item {...fullRowWidth}>
                <Typography variant="body2">
                  The material-ui library offers a powerful theming
                  solution that lets you change the appearance of your app on the
                  fly. Check out some of the properties you can modify here:
                </Typography>
              </Grid>
              <Divider />
              <Grid item {...fullRowWidth}>
                <ThemeSettingsContainer theme={theme} onThemeChange={onThemeChange} />
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
