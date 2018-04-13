import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';

const SlideSubheadingCaption = (props) => {
  const { caption, ...other } = props;

  return (
    <Typography variant="subheading" color="inherit" {...other}>
      { caption }
    </Typography>
  );
};

SlideSubheadingCaption.propTypes = {
  caption: PropTypes.string.isRequired,
};

export default SlideSubheadingCaption;
