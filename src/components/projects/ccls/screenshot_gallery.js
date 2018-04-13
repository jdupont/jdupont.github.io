import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import { AutoRotatingCarousel, Slide, SlideSubheadingCaption } from '../../../widgets/auto_rotating_carousel';

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
            caption={(<SlideSubheadingCaption caption="A listing of libraries in the CCLS system." />)}
          />
          <Slide
            media={<img src={`${process.env.PUBLIC_URL}/images/projects/ccls/CCLSScreenshot2.jpg`} alt="whatever" />}
            key="second"
            caption={(<SlideSubheadingCaption caption="Sample results from a catalog search." />)}
          />
          <Slide
            media={<img src={`${process.env.PUBLIC_URL}/images/projects/ccls/CCLSScreenshot3.jpg`} alt="whatever" />}
            key="third"
            caption={(<SlideSubheadingCaption caption="One of the user feedback options for the beta version." />)}
          />
          <Slide
            media={<img src={`${process.env.PUBLIC_URL}/images/projects/ccls/GPDeveloperConsoleOverview.png`} alt="whatever" />}
            key="fourth"
            caption={(<SlideSubheadingCaption caption="The overview page for the CCLS app in the Google Play Developer Console." />)}
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
