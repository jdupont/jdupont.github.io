import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import BlurbTextHeader from './blurb_text_header';
import BlurbMediaHeader from './blurb_media_header';
import HoverCard from '../../widgets/hover_card';
import TagCloud from '../tag_cloud';
import { history } from '../../widgets/react_router_prop_types';
import { linkStringification } from '../routing/query_link';

const blogCardStyle = theme => ({
  actions: {
    justifyContent: 'flex-end',
  },
  actionRow: {
    justifyContent: 'center',
  },
  actionOverride: {
    height: '100%',
    padding: theme.spacing.unit,
  },
});

class BlurbCard extends Component {
  constructor(props) {
    super(props);

    this.onStartHover = this.onStartHover.bind(this);
    this.onEndHover = this.onEndHover.bind(this);

    this.state = { mousedOver: false };
  }

  onStartHover() {
    this.setState({ mousedOver: true });
  }

  onEndHover() {
    this.setState({ mousedOver: false });
  }

  render() {
    const { classes } = this.props;

    const headerImage = this.props.image ?
      (<BlurbMediaHeader
        image={this.props.image}
        title={this.props.title}
        date={this.props.date}
        scale={this.state.mousedOver ? 1.02 : 1}
      />) : null;

    return (
      <HoverCard
        onMouseOver={this.onStartHover}
        onMouseOut={this.onEndHover}
        onFocus={this.onStartHover}
        onBlur={this.onEndHover}
        onClick={(event) => {
          let parent = event.target;
          let inLink = false;
          while (parent && !inLink) {
            if (parent.tagName.toUpperCase() === 'A') {
              inLink = true;
            }

            parent = parent.parentElement;
          }

          if (!inLink) {
            this.props.history.push(`/blogs?${linkStringification(this.props.link.query)}`);
          }
        }}

      >
        { headerImage }
        <BlurbTextHeader title={this.props.title} date={this.props.date} link={this.props.link} />
        <CardContent>
          <Typography component="p">
            {this.props.preview}
          </Typography>
        </CardContent>
        <CardActions className={classes.actionRow} classes={{ root: classes.actionOverride }}>
          <TagCloud tags={this.props.tags} />
        </CardActions>
      </HoverCard>
    );
  }
}

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
  // eslint-disable-next-line react/no-typos
  history: history.isRequired,
};

export default withRouter(withStyles(blogCardStyle, { withTheme: true })(BlurbCard));
