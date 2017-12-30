import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import BlurbTextHeader from './blurb_text_header';
import BlurbMediaHeader from './blurb_media_header';
import HoverCard from '../../widgets/hover_card';
import ChipArray from '../../widgets/chip_array';
import { history } from '../../widgets/react_router_prop_types';
import { linkStringification } from '../routing/query_link';

const blogCardStyle = () => ({
  actions: {
    justifyContent: 'flex-end',
  },
  actionRow: {
    justifyContent: 'center',
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
    <HoverCard onClick={() => props.history.push(`/blogs?${linkStringification(props.link.query)}`)}>
      { headerImage }
      <BlurbTextHeader title={props.title} date={props.date} link={props.link} />
      <CardContent>
        <Typography component="p">
          {props.preview}
        </Typography>
      </CardContent>
      <CardActions className={classes.actionRow}>
        <ChipArray tags={props.tags} />
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
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  history: history.isRequired,
};

export default withRouter(withStyles(blogCardStyle, { withTheme: true })(BlurbCard));
