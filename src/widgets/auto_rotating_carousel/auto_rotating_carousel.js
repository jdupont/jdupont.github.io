import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Hidden from 'material-ui/Hidden';
import { withStyles } from 'material-ui/styles';

import Lightbox from '../lightbox/lightbox';
import Dots from '../dots/dots.js';
import Carousel from './carousel';
import CarouselArrows from './carousel_arrows';
import { modulo } from './util';

const styles = theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  carouselWrapper: {
    overflow: 'hidden',
    background: 'transparent',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      borderRadius: 14,
    },
  },
  dots: {
    paddingTop: 32,
    margin: '0 auto',
  },
  content: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    [theme.breakpoints.up('md')]: {
      width: '70%',
      maxWidth: 700,
      height: '95%',
      maxHeight: 600,
      margin: '0 auto 0',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
    },
  },
  footer: {
    marginTop: -72,
    width: '100%',
    position: 'relative',
    textAlign: 'center',
  },
});

class AutoRotatingCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { slideIndex: 0, lightboxOpen: false };

    this.increaseIndex = this.increaseIndex.bind(this);
    this.decreaseIndex = this.decreaseIndex.bind(this);
  }

  increaseIndex() {
    const slideIndex = this.state.slideIndex + 1;
    this.setState({ slideIndex });
  }

  decreaseIndex() {
    const slideIndex = this.state.slideIndex - 1;
    this.setState({ slideIndex });
  }

  handleChange = (slideIndex) => {
    this.setState({ slideIndex });
  }

  render() {
    const { slideIndex, lightboxOpen } = this.state;
    const {
      autoplay,
      interval,
      children,
      classes,
      ...other
    } = this.props;

    if (!children) {
      return null;
    }

    return (
      <div className={classes.root} {...other}>
        <div className={classes.content}>
          <Paper className={classes.carouselWrapper}>
            <Carousel
              autoplay={autoplay}
              interval={interval}
              index={slideIndex}
              onChangeIndex={this.handleChange}
              style={{ height: '100%' }}
              containerStyle={{ height: '100%' }}
              slideStyle={{ height: '100%', width: '100%' }}
            >
              { children }
            </Carousel>
          </Paper>
          <div>
            <div className={classes.footer}>
              <Dots
                count={children.length}
                index={modulo(slideIndex, children.length)}
                className={classes.dots}
                onDotClick={this.handleChange}
              />
            </div>
          </div>
          <Hidden smDown>
            <CarouselArrows onLeftClick={this.decreaseIndex} onRightClick={this.increaseIndex} />
          </Hidden>
          <Lightbox
            open={lightboxOpen}
            onCloseRequest={() => { this.setState({ lightboxOpen: false }); }}
          />
        </div>
      </div>
    );
  }
}

AutoRotatingCarousel.defaultProps = {
  autoplay: true,
  interval: 10000,
  children: undefined,
};

AutoRotatingCarousel.propTypes = {
  children: PropTypes.node,
  /** If `false`, the auto play behavior is disabled. */
  autoplay: PropTypes.bool,
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  /** Delay between auto play transitions (in ms). */
  interval: PropTypes.number,
};

export default withStyles(styles)(AutoRotatingCarousel);
