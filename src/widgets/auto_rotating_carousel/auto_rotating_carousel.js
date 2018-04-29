import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Hidden from 'material-ui/Hidden';
import { withStyles } from 'material-ui/styles';

import Lightbox from '../lightbox/lightbox';
import Dots from '../dots/dots.js';
import Carousel from './carousel';
import CaptionedImage from './captioned_image';
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
  static wrapImagesInSlides(images) {
    return images.map((image) => {
      if (image.caption) {
        return (
          <CaptionedImage
            key={image.src}
            caption={image.caption}
            src={image.src}
          />
        );
      }

      return 'Ooops not yet implemented. Need to add no-caption image slide here';
    });
  }

  static shouldAutoPlay(playing, lightboxOpen) {
    return playing && !lightboxOpen;
  }

  constructor(props) {
    super(props);
    this.state = { slideIndex: 0, lightboxOpen: false };

    this.increaseIndex = this.increaseIndex.bind(this);
    this.decreaseIndex = this.decreaseIndex.bind(this);
  }

  increaseIndex() {
    this.setState(({ slideIndex }, props) =>
      ({ slideIndex: (slideIndex + 1) % props.images.length }));
  }

  decreaseIndex() {
    this.setState(({ slideIndex }, props) =>
      ({ slideIndex: ((slideIndex + props.images.length) - 1) % props.images.length }));
  }

  handleChange = (updatedSlideIndex) => {
    this.setState((prevState, props) => {
      if (updatedSlideIndex > 0 && updatedSlideIndex < props.images.length) {
        return { slideIndex: updatedSlideIndex };
      } else if (updatedSlideIndex < 0) {
        return {
          slideIndex: (updatedSlideIndex + props.images.length) % props.images.length,
        };
      } else if (updatedSlideIndex >= props.images.length) {
        return { slideIndex: (updatedSlideIndex) % props.images.length };
      }

      return { slideIndex: updatedSlideIndex };
    });
  }

  render() {
    const { slideIndex, lightboxOpen } = this.state;
    const {
      playing,
      interval,
      images,
      classes,
      theme,
      ...other
    } = this.props;

    if (!images) {
      return null;
    }

    const children = AutoRotatingCarousel.wrapImagesInSlides(images);

    return (
      <div className={classes.root} {...other}>
        <div className={classes.content}>
          <Paper
            className={classes.carouselWrapper}
            onClick={() => this.setState({ lightboxOpen: true })}
          >
            <Carousel
              autoplay={AutoRotatingCarousel.shouldAutoPlay(playing, lightboxOpen)}
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
            onRequestClose={() => this.setState({ lightboxOpen: false })}
            images={images}
            slideIndex={slideIndex}
            onIncreaseSlideIndex={this.increaseIndex}
            onDecreaseSlideIndex={this.decreaseIndex}
            overlayZIndex={theme.zIndex.appBar + 1}
          />
        </div>
      </div>
    );
  }
}

AutoRotatingCarousel.defaultProps = {
  playing: true,
  interval: 10000,
};

AutoRotatingCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    caption: PropTypes.string,
  })).isRequired,
  /** If `false`, the auto play behavior is disabled. */
  playing: PropTypes.bool,
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  /** Delay between auto play transitions (in ms). */
  interval: PropTypes.number,
};

export default withStyles(styles, { withTheme: true })(AutoRotatingCarousel);
