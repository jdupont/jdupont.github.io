import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import { AutoRotatingCarousel, Slide } from '../../../widgets/auto_rotating_carousel';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

function SingleLineGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div style={{ position: 'relative', width: '100%', height: 500 }}>
        <AutoRotatingCarousel>
          <Slide
            media={<img src={`${process.env.PUBLIC_URL}/images/projects/ccls/CCLSScreenshot1.jpg`} alt="whatever" />}
            key="first"
            caption={(<Typography variant="headline" color="inherit">First Caption</Typography>)}
          />
          <Slide
            media={<img src={`${process.env.PUBLIC_URL}/images/projects/ccls/CCLSScreenshot2.jpg`} alt="whatever" />}
            key="second"
            caption={(<Typography color="inherit">Second Caption</Typography>)}
          />
          <Slide
            media={<img src={`${process.env.PUBLIC_URL}/images/projects/ccls/CCLSScreenshot3.jpg`} alt="whatever" />}
            key="third"
            caption={(<Typography color="inherit">Third Caption</Typography>)}
          />
          <Slide
            media={<img src={`${process.env.PUBLIC_URL}/images/projects/ccls/GPDeveloperConsoleOverview.png`} alt="whatever" />}
            key="third"
            caption={(<Typography color="inherit">Fourth Caption</Typography>)}
          />
        </AutoRotatingCarousel>
      </div>
    </div>
  );
}

SingleLineGridList.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
};

export default withStyles(styles)(SingleLineGridList);
