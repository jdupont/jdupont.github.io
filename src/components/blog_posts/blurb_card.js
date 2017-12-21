import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import QueryLink from '../routing/query_link';
import BlurbTextHeader from './blurb_text_header';
import BlurbMediaHeader from './blurb_media_header';
import HoverCard from '../hover_card';

const blogCardStyle = () => ({
  actions: {
    justifyContent: 'flex-end',
  },
});

const BlurbCard = (props) => {
  const { classes } = props;

  const headerImage = props.image ?
    (<BlurbMediaHeader
      image={props.image}
      title={props.title}
      date={props.date}
      // scale={props.mousedOver ? 1.03 : 1}
    />) : null;

  return (
    <HoverCard>
      { headerImage }
      <BlurbTextHeader title={props.title} date={props.date} />
      <CardContent>
        <Typography component="p">
          {props.preview}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions} >
        <Button dense component={QueryLink} to={props.link}>READ</Button>
      </CardActions>
    </HoverCard>
  );
};

BlurbCard.defaultProps = {
  image: null,
};

BlurbCard.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  link: PropTypes.shape({
    query: PropTypes.object,
  }).isRequired,
  image: PropTypes.string,
};

export default withStyles(blogCardStyle)(BlurbCard);
