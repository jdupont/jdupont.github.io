import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import SvgIcon from 'material-ui/SvgIcon';

import BlogHelmet from './blog_helmet';
import { markdownStyles, marked } from './blog_posts/markdown_styling';
import { fullRowWidth, contentRowWidths } from '../style/dimensions';
import { topLevelGridStyles } from '../style/grid_styles';
import { MY_NAME } from '../docs/blog_constants.js';
// Disabling eslint for these imports because they don't like webpack loader syntax
// But, that's needed in create-react-app without ejecting because there's no
// access to the webpack configuration files
/* eslint-disable */
import aboutMe from '!json-loader!front-matter-loader!../docs/about_me.md';
import aboutBlog from '!json-loader!front-matter-loader!../docs/about_blog.md';
/* eslint-enable */

const contentStyles = theme => ({
  content: {
    ...topLevelGridStyles(theme),
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
  buttonRow: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  headerText: {
    color: theme.typography.title.color,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
    color: theme.palette.secondary.A400,
  },
  markdown: markdownStyles(theme),
});

const AboutMe = (props) => {
  const { classes } = props;

  return (
    <Grid
      container
      className={classes.content}
    >
      <BlogHelmet pageTitle="About Me" />
      <Grid item {...fullRowWidth}>
        <Grid container justify="center">
          <Grid item {...contentRowWidths} component={Paper}>
            <Grid container className={classes.aboutMeBox}>
              <Grid item xs={12} sm={3} md={3}>
                <Paper elevation={5} className={classes.circleContainer} />
              </Grid>
              <Grid item xs={12} sm={9} md={9}>
                <Grid container>
                  <Grid item {...fullRowWidth}>
                    <Typography type="display3" className={classes.headerText}>{MY_NAME}</Typography>
                  </Grid>
                  <Grid item {...fullRowWidth}>
                    <div
                      className={classnames(classes.paddedContent, classes.markdown)}
                      /* eslint-disable react/no-danger */
                      dangerouslySetInnerHTML={{ __html: marked(aboutMe.body) }}
                      /* eslint-ensable react/no-danger */
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider />
            <Grid container className={classes.aboutMeBox}>
              <Grid item {...fullRowWidth}>
                <Grid container>
                  <Grid item {...fullRowWidth}>
                    <Typography type="display1">About this blog</Typography>
                  </Grid>
                  <Grid item {...fullRowWidth}>
                    <div
                      className={classnames(classes.paddedContent, classes.markdown)}
                      /* eslint-disable react/no-danger */
                      dangerouslySetInnerHTML={{ __html: marked(aboutBlog.body) }}
                      /* eslint-ensable react/no-danger */
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container wrap="wrap" className={classes.aboutMeBox} justify="center">
              <Grid item {...fullRowWidth} className={classes.buttonRow}>
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
                  Stack&nbsp;Overflow
                </Button>
                <Button component="a" href="https://www.linkedin.com/in/julesdupont">
                  <SvgIcon className={classes.leftIcon}>
                    <svg>
                      <use href={`${process.env.PUBLIC_URL}/images/linked_in.svg#linkedInIcon`} />
                    </svg>
                  </SvgIcon>
                  LinkedIn
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
