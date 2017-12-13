import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import HoverCard from './hover_card';

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
  sorryMessage: {
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
            <HoverCard>
              <div className={classes.media}>
                <svg>
                  <use href={`${process.env.PUBLIC_URL}/images/sad_face.svg#main`} />
                </svg>
              </div>
              <Divider />
              <CardContent>
                <Typography type="display2" className={classes.sorryMessage}>
                  Sorry, I couldn&#39;t find that page.
                </Typography>
              </CardContent>
              <CardActions className={classes.actions}>
                <Button dense component={Link} to="/">Go Home</Button>
              </CardActions>
            </HoverCard>
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
