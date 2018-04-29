import React from 'react';
import PropTypes from 'prop-types';

import Slide from './slide';
import SlideSubheadingCaption from './auto_rotating_carousel';

const CaptionedImage = (props) => {
  const { caption, imagePath, ...other } = props;

  return (
    <Slide
      media={<img src={imagePath} alt={caption} />}
      caption={(<SlideSubheadingCaption caption={caption} />)}
      {...other}
    />
  );
};

CaptionedImage.propTypes = {
  caption: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default CaptionedImage;
