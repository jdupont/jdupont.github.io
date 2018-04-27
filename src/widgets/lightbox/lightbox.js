import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';

const LightboxWrapper = (props) => {
  const { open, onRequestClose, image } = props;

  if (open) {
    return (
      <Lightbox
        mainSrc={image}
        onCloseRequest={onRequestClose}
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
  image: PropTypes.string.isRequired,
  open: PropTypes.boolean,
  onRequestClose: PropTypes.func,
};

export default LightboxWrapper;
