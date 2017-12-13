import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

const fourOhFourStyles = theme => ({
  content: {
    padding: theme.spacing.unit * 2,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginTop: 56,
  },
  actions: {
    justifyContent: 'flex-end',
    color: theme.palette.text.primary,
  },
  media: {
    height: 300,
    padding: theme.spacing.unit * 2,
    fill: theme.palette.primary[600],
    display: 'flex',
    justifyContent: 'center',
  },
});

const FourOhFour = (props) => {
  const { classes } = props;

  return (
    <Grid
      container
      className={classes.content}
    >
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item xs={8}>
            <Card>
              <div className={classes.media}>
                <svg
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 32 32"
                >
                  <g>
                    <path d="M16-0.034C7.159-0.034-0.035,7.158-0.035,16S7.159,32.034,16,32.034S32.035,24.842,32.035,16   S24.841-0.034,16-0.034z M16,30.966C7.748,30.966,1.035,24.252,1.035,16S7.748,1.034,16,1.034S30.965,7.748,30.965,16   S24.252,30.966,16,30.966z" />
                    <path d="M16.163,19.823c-2.789,0-5.477,1.179-7.374,3.235c-0.2,0.217-0.187,0.555,0.031,0.755   c0.216,0.2,0.554,0.188,0.755-0.03c1.695-1.838,4.096-2.892,6.587-2.892c2.529,0,4.956,1.081,6.656,2.967   c0.105,0.116,0.251,0.176,0.397,0.176c0.128,0,0.256-0.045,0.358-0.138c0.219-0.197,0.237-0.535,0.039-0.755   C21.709,21.032,18.994,19.823,16.163,19.823z" />
                    <path d="M10.5,16.5c1.103,0,2-0.897,2-2s-0.897-2-2-2s-2,0.897-2,2S9.397,16.5,10.5,16.5z M10.5,13.5   c0.551,0,1,0.448,1,1s-0.449,1-1,1s-1-0.448-1-1S9.949,13.5,10.5,13.5z" />
                    <path d="M21.5,16.5c1.103,0,2-0.897,2-2s-0.897-2-2-2s-2,0.897-2,2S20.397,16.5,21.5,16.5z M21.5,13.5   c0.551,0,1,0.448,1,1s-0.449,1-1,1s-1-0.448-1-1S20.949,13.5,21.5,13.5z" />
                  </g>
                </svg>
              </div>
              <Divider />
              <CardContent>
                <Typography type="display2">
                  Sorry, I couldn&#39;t find that page.
                </Typography>
              </CardContent>
              <CardActions className={classes.actions}>
                <Button dense>Return to home</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

FourOhFour.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
};

export default withStyles(fourOhFourStyles, { withTheme: true })(FourOhFour);
