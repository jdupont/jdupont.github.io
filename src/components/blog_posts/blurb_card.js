import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';

import BlurbTextHeader from './blurb_text_header';
import BlurbMediaHeader from './blurb_media_header';
import HoverCard from '../../widgets/hover_card';

const blogCardStyle = theme => ({
  actions: {
    justifyContent: 'flex-end',
  },
  chip: {
    margin: theme.spacing.unit / 3,
  },
  chipRow: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  actionRow: {
    justifyContent: 'center',
  },
});

class BlurbCard extends Component {
  static createChip(chipClassName, tag) {
    return (
      <Chip
        className={chipClassName}
        key={tag}
        label={tag}
        onClick={() => console.log('Do nothing')}
      />);
  }

  static createChips(chipRowClassName, chipClassName, tags) {
    return (
      <div className={chipRowClassName}>
        {tags.map(tag => BlurbCard.createChip(chipClassName, tag))}
      </div>);
  }

  render() {
    const { classes } = this.props;

    const headerImage = this.props.image ?
      (<BlurbMediaHeader
        image={this.props.image}
        title={this.props.title}
        date={this.props.date}
        // scale={props.mousedOver ? 1.03 : 1}
      />) : null;

    return (
      <HoverCard>
        { headerImage }
        <BlurbTextHeader title={this.props.title} date={this.props.date} link={this.props.link} />
        <CardContent>
          <Typography component="p">
            {this.props.preview}
          </Typography>
        </CardContent>
        <CardActions className={classes.actionRow}>
          {BlurbCard.createChips(classes.chipRow, classes.chip, this.props.tags)}
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
};

export default withStyles(blogCardStyle, { withTheme: true })(BlurbCard);
