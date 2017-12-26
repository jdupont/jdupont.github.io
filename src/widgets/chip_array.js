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
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  actionRow: {
    justifyContent: 'center',
  },
});

class ChipArray extends Component {
  static createChip(chipClassName, tag) {
    return (
      <Chip
        className={chipClassName}
        key={tag}
        label={tag}
        onClick={() => console.log('Do nothing')}
      />);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.chipRow}>
        {this.props.tags.map(tag => ChipArray.createChip(classes.chip, tag))}
      </div>
    );
  }
}

ChipArray.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withStyles(chipStyle, { withTheme: true })(ChipArray);
