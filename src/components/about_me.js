import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import SvgIcon from 'material-ui/SvgIcon';

const contentStyles = theme => ({
  content: {
    padding: theme.spacing.unit * 2,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginTop: 56,
  },
  aboutMeBox: {
    padding: theme.spacing.unit * 2,
  },
  centeredGrid: {
    justifyContent: 'center',
  },
  circleContainer: {
    width: '100%',
    paddingBottom: '100%',
    backgroundImage: `url("${process.env.PUBLIC_URL}/images/me.jpg")`,
    backgroundSize: 'cover',
    borderRadius: '50%',
    overflow: 'hidden',
  },
  header: {
    // background: emphasize(theme.palette.primary[300], 0.26),
  },
  headerText: {
    color: theme.typography.title.color,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
    color: theme.palette.secondary.A400,
  },
});

const AboutMe = (props) => {
  const { classes } = props;

  return (
    <Grid
      container
      className={classes.content}
    >
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item xs={12} md={10} lg={7} component={Paper}>
            <Grid container className={classNames(classes.aboutMeBox, classes.header)}>
              <Grid item xs={3}>
                <Paper elevation="5" className={classes.circleContainer} />
              </Grid>
              <Grid item xs={9}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography type="display3" className={classes.headerText}>Jules Dupont</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography type="subheading">
                      I am an enthusiathic young software developer, and this blog is a chronicle
                      of my efforts to improve my skills. Inside, you will find descriptions of my
                      side projects, and my thoughts on the software books and courses I am using
                      as learning tools. Thanks for your interest!
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider />
            <Grid container className={classes.aboutMeBox}>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography type="display1">About this blog</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      I built this blog myself as a way to learn more about React and
                      Materia Design.
                      The blog is a static site hosted on Github Pages, with routing implemented
                      using the methods described here. I used React as my front-end framework, with
                      the material-ui library providing React components that implement the material
                      Design guidelines.
                      All of the source code is freely available on my GitHub.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container className={classes.aboutMeBox} justify="center">
              <Grid item xs={6} style={{ display: 'flex', 'justify-content': 'center' }}>
                <Button component="a" href="https://github.com/jdupont">
                  <SvgIcon className={classes.leftIcon}>
                    <svg>
                      <use href={`${process.env.PUBLIC_URL}/images/github_mark.svg#main`} />
                    </svg>
                  </SvgIcon>
                  GitHub
                </Button>
                <Button component="a" href="https://stackoverflow.com/users/8762152/jdupont">
                  <SvgIcon className={classes.leftIcon}>
                    <svg>
                      <use href={`${process.env.PUBLIC_URL}/images/stack_overflow.svg#main`} />
                    </svg>
                  </SvgIcon>
                  Stack Overflow
                </Button>
                <Button component="a" href="https://www.linkedin.com/in/julesdupont">
                  <SvgIcon className={classes.leftIcon}>
                    <svg>
                      <use href={`${process.env.PUBLIC_URL}/images/linked_in.svg#linkedInIcon`} />
                    </svg>
                  </SvgIcon>
                  Linked In
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

AboutMe.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
};

export default withStyles(contentStyles, { withTheme: true })(AboutMe);
