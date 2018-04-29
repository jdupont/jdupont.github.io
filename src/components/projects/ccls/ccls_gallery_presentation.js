import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import { AutoRotatingCarousel } from '../../../widgets/auto_rotating_carousel';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
});

const CCLSGallery = (props) => {
  const { classes, images, ...other } = props;

  return (
    <div className={classes.root} {...other}>
      <div style={{ position: 'relative', width: '100%', height: 500 }}>
        <AutoRotatingCarousel
          images={images}
        />
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
    src: PropTypes.string.isRequired,
  })).isRequired,
};

export default withStyles(styles)(CCLSGallery);
