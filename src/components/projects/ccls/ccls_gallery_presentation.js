import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Lightbox from '../../../widgets/lightbox/lightbox';

import { AutoRotatingCarousel, Slide, SlideSubheadingCaption } from '../../../widgets/auto_rotating_carousel';

const Screenshot = (props) => {
  const { caption, imagePath, ...other } = props;

  return (
    <Slide
      media={<img src={imagePath} alt={caption} />}
      caption={(<SlideSubheadingCaption caption={caption} />)}
      {...other}
    />
  );
};

Screenshot.propTypes = {
  caption: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};

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

const CCLSGallery = (props) => {
  const { classes, images, ...other } = props;

  return (
    <div className={classes.root} {...other}>
      <div style={{ position: 'relative', width: '100%', height: 500 }}>
        <AutoRotatingCarousel>
          {
            images.map(image => (
              <Screenshot key={image.name} caption={image.caption} imagePath={`${process.env.PUBLIC_URL}/${image.path}`} />
            ))
          }
        </AutoRotatingCarousel>
      </div>
      <Lightbox
        open={false}
        image={`${process.env.PUBLIC_URL}/${images[0].path}`}
      />
    </div>
  );
};

CCLSGallery.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  images: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })).isRequired,
};

export default withStyles(styles)(CCLSGallery);
