import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Chip from 'material-ui/Chip';

const chipStyle = theme => ({
  chip: {
    margin: theme.spacing.unit / 3,
  },
  chipRow: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

class TagFilterCloud extends Component {
  static createChip(classes, tag) {
    return (
      <Chip
        className={classes.chip}
        key={tag.tagName}
        label={tag.tagName}
        onDelete={tag.onDelete}
      />
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.chipRow}>
        {this.props.tags.map(tag => TagFilterCloud.createChip(classes, tag))}
      </div>
    );
  }
}

TagFilterCloud.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  tags: PropTypes.arrayOf(PropTypes.shape({
    tagName: PropTypes.string,
    onDelete: PropTypes.func,
  })).isRequired,
};

export default withStyles(chipStyle, { withTheme: true })(TagFilterCloud);
