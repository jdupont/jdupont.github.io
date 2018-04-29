import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import { AutoRotatingCarousel } from '../../../widgets/auto_rotating_carousel';
import CaptionedImage from '../../../widgets/auto_rotating_carousel/captioned_image';

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

  const formattedImages = images.map(image => (
    <CaptionedImage key={image.name} caption={image.caption} imagePath={`${process.env.PUBLIC_URL}/${image.path}`} />
  ));

  return (
    <div className={classes.root} {...other}>
      <div style={{ position: 'relative', width: '100%', height: 500 }}>
        <AutoRotatingCarousel>
          { formattedImages }
        </AutoRotatingCarousel>
      </div>
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
