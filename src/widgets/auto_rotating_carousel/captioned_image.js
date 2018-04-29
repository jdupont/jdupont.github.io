import React from 'react';
import PropTypes from 'prop-types';

import Slide from './slide';
import SlideSubheadingCaption from './slide_subheading_caption';

const CaptionedImage = (props) => {
  const { caption, src, ...other } = props;

  return (
    <Slide
      media={<img src={src} alt={caption} />}
      caption={(<SlideSubheadingCaption caption={caption} />)}
      {...other}
    />
  );
};

CaptionedImage.propTypes = {
  caption: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default CaptionedImage;
