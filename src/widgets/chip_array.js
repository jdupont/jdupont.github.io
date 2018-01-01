import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { emphasize } from 'material-ui/styles/colorManipulator';
import Chip from 'material-ui/Chip';

import QueryLink from '../components/routing/query_link';

const chipStyle = theme => ({
  chip: {
    margin: theme.spacing.unit / 3,
    WebkitTapHighlightColor: theme.palette.common.transparent,
    cursor: 'pointer',
    '&:hover, &:focus': {
      backgroundColor: emphasize(theme.palette.background.chip, 0.08),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.background.chip, 0.12),
    },
  },
  stripLink: {
    textDecoration: 'none',
  },
  chipRow: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});

class ChipArray extends Component {
  static createChip(classes, tag) {
    return (
      <QueryLink className={classes.stripLink} key={tag} to={{ pathname: '/archives/tags', query: { tags: [tag] } }}>
        <Chip
          className={classes.chip}
          label={tag}
        />
      </QueryLink>);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.chipRow}>
        {this.props.tags.map(tag => ChipArray.createChip(classes, tag))}
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
