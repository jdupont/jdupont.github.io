import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { emphasize } from 'material-ui/styles/colorManipulator';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import Autocomplete from '../widgets/autocomplete';
import { fullRowWidth, contentRowWidths } from '../style/dimensions';
import { topLevelGridStyles } from '../style/grid_styles';

const suggestions = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
];

const contentStyles = theme => ({
  content: {
    ...topLevelGridStyles(theme),
  },
  titleRow: {
    padding: theme.spacing.unit * 2,
    background: emphasize(theme.palette.primary[300], 0.26),
    borderRadius: '2px 2px 0px 0px',
  },
  text: {
    color: theme.palette.background.default,
  },
});

const Archives = (props) => {
  const { classes } = props;

  return (
    <Grid
      container
      className={classes.content}
    >
      <Grid item {...fullRowWidth}>
        <Grid container justify="center">
          <Grid item {...contentRowWidths} component={Paper}>
            <Grid container {...fullRowWidth}>
              <Grid item {...fullRowWidth}>
                <div className={classes.titleRow}>
                  <Typography type="display3" className={classes.text}>Welcome to the Archives</Typography>
                </div>
              </Grid>
              <Grid item {...fullRowWidth}>
                <Autocomplete hint="Start typing to add tags" suggestions={suggestions} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Archives.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
};

export default withStyles(contentStyles, { withTheme: true })(Archives);
