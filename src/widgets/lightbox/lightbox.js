import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';

const LightboxWrapper = (props) => {
  const {
    open,
    onRequestClose,
    image,
    ...other
  } = props;

  if (open && image) {
    return (
      <Lightbox
        mainSrc={image.src}
        imageCaption={image.caption}
        onCloseRequest={onRequestClose}
        imageLoadErrorMessage={`Could not load image from ${image.src}`}
        {...other}
      />
    );
  }

  return null;
};

LightboxWrapper.defaultProps = {
  open: false,
  onRequestClose: () => {},
};

LightboxWrapper.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    caption: PropTypes.string,
  }).isRequired,
  open: PropTypes.bool,
  onRequestClose: PropTypes.func,
};

export default LightboxWrapper;
