import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CardMedia } from 'material-ui/Card';

const blogCardStyle = () => ({
  mediaSection: {
    height: 225,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    transition: '0.6s ease',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    overflow: 'hidden',
  },
});

const BlurbMediaHeader = (props) => {
  const { classes } = props;

  return (
    <CardMedia
      className={classes.mediaSection}
      src="none"
    >
      <div
        className={classes.image}
        src={props.image}
        style={{
          transform: `scale(${props.scale})`,
          backgroundImage: `url(${props.image})`,
        }}
      />
    </CardMedia>
  );
};

BlurbMediaHeader.defaultProps = {
  scale: 1,
};

BlurbMediaHeader.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  image: PropTypes.string.isRequired,
  scale: PropTypes.number,
};

export default withStyles(blogCardStyle)(BlurbMediaHeader);
