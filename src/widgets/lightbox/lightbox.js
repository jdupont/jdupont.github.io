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
    overlayZIndex,
    ...other
  } = props;

  if (open && images && images.length > 0 && slideIndex < images.length) {
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
        reactModalStyle={{ overlay: { zIndex: overlayZIndex } }}
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
  overlayZIndex: 1200,
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
  overlayZIndex: PropTypes.number,
};

export default LightboxWrapper;
