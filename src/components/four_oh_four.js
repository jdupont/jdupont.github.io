import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

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
  },
});

const FourOhFour = (props) => {
  const { classes } = props;

  return (
    <Grid
      container
      className={classNames(
        classes.root,
        classes.content,
      )}
    >
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item xs={8}>
            <Card>
              <CardMedia className={classes.media} src={`${process.env.PUBLIC_URL}/images/sad_face.svg`} />
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
