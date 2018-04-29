import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';

const LightboxWrapper = (props) => {
  const {
    open,
    onRequestClose,
    onIncreaseSlideIndex,
    onDecreaseSlideIndex,
    images,
    slideIndex,
    ...other
  } = props;

  if (open && images && images.length > 0) {
    return (
      <Lightbox
        mainSrc={images[slideIndex].src}
        imageCaption={images[slideIndex].caption}
        nextSrc="notneeded"
        prevSrc="notneeded"
        onMovePrevRequest={onDecreaseSlideIndex}
        onMoveNextRequest={onIncreaseSlideIndex}
        onCloseRequest={onRequestClose}
        imageLoadErrorMessage={`Could not load image from ${images[slideIndex].src}`}
        {...other}
      />
    );
  }

  return null;
};

LightboxWrapper.defaultProps = {
  open: false,
  onRequestClose: () => {},
  slideIndex: undefined,
  onIncreaseSlideIndex: undefined,
  onDecreaseSlideIndex: undefined,
};

LightboxWrapper.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    caption: PropTypes.string,
  })).isRequired,
  slideIndex: PropTypes.number,
  onIncreaseSlideIndex: PropTypes.func,
  onDecreaseSlideIndex: PropTypes.func,
  open: PropTypes.bool,
  onRequestClose: PropTypes.func,
};

export default LightboxWrapper;
