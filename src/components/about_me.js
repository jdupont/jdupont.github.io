import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { emphasize } from 'material-ui/styles/colorManipulator';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Icon from 'material-ui/Icon';
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
    // color: theme.palette.background.default,
    // <img src={`${process.env.PUBLIC_URL}/images/me.jpg`} width="100%" alt="Me" />
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
                      of my efforts to improve my skills. Inside, you will find , and some
                      reflections on my side projects. Thanks for your interest!
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
                    <Typography>I designed this blog blah blah blah.</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider />
            <Grid container className={classes.aboutMeBox}>
              <Grid item xs={4}>
                <Grid container>
                  <Grid item xs={12}>
                    <List>
                      <ListItem button>
                        <ListItemIcon>
                          <SvgIcon src={`${process.env.PUBLIC_URL}/images/linked_in.svg`} />
                        </ListItemIcon>
                        <ListItemText primary="Github" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <SvgIcon src={`${process.env.PUBLIC_URL}/images/linked_in.svg`} />
                        </ListItemIcon>
                        <ListItemText primary="LinkedIn" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <SvgIcon src={`${process.env.PUBLIC_URL}/images/linked_in.svg`} />
                        </ListItemIcon>
                        <ListItemText primary="Stack Overflow" />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
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
