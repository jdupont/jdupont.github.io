import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import { grey } from 'material-ui/colors';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const styles = () => ({
  arrowLeft: {
    width: 48,
    height: 48,
    position: 'absolute',
    top: 'calc((100% - 96px) / 2 + 24px)',
    left: -96,
  },
  arrowRight: {
    width: 48,
    height: 48,
    position: 'absolute',
    top: 'calc((100% - 96px) / 2 + 24px)',
    right: -96,
  },
  arrowIcon: {
    color: grey[700],
  },
});

const CarouselArrows = (props) => {
  const { classes, onLeftClick, onRightClick } = props;

  return (
    <div>
      <Button
        variant="fab"
        className={classes.arrowLeft}
        onClick={onLeftClick}
      >
        <ArrowBackIcon className={classes.arrowIcon} />
      </Button>
      <Button
        variant="fab"
        className={classes.arrowRight}
        onClick={onRightClick}
      >
        <ArrowForwardIcon className={classes.arrowIcon} />
      </Button>
    </div>
  );
};

CarouselArrows.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  onLeftClick: PropTypes.func.isRequired,
  onRightClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(CarouselArrows);
