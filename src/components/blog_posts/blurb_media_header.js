import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CardMedia } from 'material-ui/Card';

import BlurbTextHeader from './blurb_text_header';

const blogCardStyle = () => ({
  media: {
    height: 300,
    display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'bottom',
  },
  textHeader: {
    //balignSelf: 'flex-start',
  },
});

const BlurbMediaHeader = (props) => {
  const { classes } = props;

  return (
    <CardMedia
      className={classes.media}
      image={props.image}
    >
      <BlurbTextHeader className={classes.textHeader} title={props.title} date={props.date} />
    </CardMedia>
  );
};

BlurbMediaHeader.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default withStyles(blogCardStyle)(BlurbMediaHeader);
