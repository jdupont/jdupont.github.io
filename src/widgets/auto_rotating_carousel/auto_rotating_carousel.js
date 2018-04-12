import React from 'react';
import PropTypes from 'prop-types';
import { Button, Paper } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import { grey } from 'material-ui/colors';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import ArrowForwardIcon from 'material-ui-icons/ArrowForward';
import Dots from '../dots/dots.js';
import Carousel from './swipable_carousel_view';
import { modulo } from './util';

const styles = {
  desktopRoot: {
    height: '100%',
    width: '100%',
  },
  mobileRoot: {
    height: '100%',
    width: '100%',
    position: 'fixed',
    left: 0,
    top: 0,
  },
  desktopCarouselWrapper: {
    overflow: 'hidden',
    borderRadius: 14,
    background: 'transparent',
    height: '100%',
  },
};

const desktopStyles = {
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
  content: {
    width: '60%',
    maxWidth: 700,
    height: 'calc(100% - 96px)',
    maxHeight: 600,
    margin: '-16px auto 0',
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  dots: {
    paddingTop: 32,
    margin: '0 auto',
  },
  footer: {
    marginTop: -72,
    width: '100%',
    position: 'relative',
    textAlign: 'center',
  },
  slide: {
    width: '100%',
    height: '100%',
  },
  carousel: {
    height: '100%',
  },
  carouselContainer: {
    height: '100%',
  },
};

const mobileStyles = {
  dots: {
    margin: '0 auto',
  },
  dotsLandscape: {
    paddingTop: 20,
    margin: '0 auto',
  },
  footer: {
    marginTop: -92,
    width: '100%',
    position: 'relative',
    textAlign: 'center',
  },
  footerLandscape: {
    marginTop: -3,
    transform: 'translateY(-50vh)',
    textAlign: 'center',
    display: 'inline-block',
  },
  slide: {
    width: '100%',
    height: '100vh',
  },
};

class AutoRotatingCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { slideIndex: 0 };
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
    const { slideIndex } = this.state;
    const {
      mobile,
      contentStyle,
      autoplay,
      interval,
      children,
      hideArrows,
      classes,
      ...other
    } = this.props;

    const style = mobile ? mobileStyles : desktopStyles;

    return (
      <div className={mobile ? classes.mobileRoot : classes.desktopRoot} {...other}>
        <div style={{ ...style.content, ...contentStyle }}>
          <Paper className={mobile || classes.desktopCarouselWrapper}>
            <Carousel
              autoplay={autoplay}
              interval={interval}
              index={slideIndex}
              onChangeIndex={this.handleChange}
              style={style.carousel}
              containerStyle={style.carouselContainer}
              slideStyle={style.slide}
            >
              {children.map(c => React.cloneElement(c, { mobile }))}
            </Carousel>
          </Paper>
          <div>
            <div style={style.footer}>
              <Dots
                count={children.length}
                index={modulo(slideIndex, children.length)}
                style={style.dots}
                onDotClick={this.handleChange}
              />
            </div>
          </div>
          { (!mobile && !hideArrows) &&
            <div>
              <Button
                variant="fab"
                style={style.arrowLeft}
                onClick={() => this.decreaseIndex()}
              >
                <ArrowBackIcon style={style.arrowIcon} />
              </Button>
              <Button
                variant="fab"
                style={style.arrowRight}
                onClick={() => this.increaseIndex()}
              >
                <ArrowForwardIcon style={style.arrowIcon} />
              </Button>
            </div>
          }
        </div>
      </div>
    );
  }
}

AutoRotatingCarousel.defaultProps = {
  autoplay: true,
  interval: 10000,
  mobile: false,
  hideArrows: false,
  contentStyle: {},
};

AutoRotatingCarousel.propTypes = {
  children: PropTypes.node.isRequired,
  /** If `false`, the auto play behavior is disabled. */
  autoplay: PropTypes.bool,
  /* eslint-disable react/forbid-prop-types */
  /** Override the inline-styles of the content container. */
  contentStyle: PropTypes.object,
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  /** Delay between auto play transitions (in ms). */
  interval: PropTypes.number,
  /** If `true`, the screen width and height is filled. */
  mobile: PropTypes.bool,
  /** If `true`, the left and right arrows are hidden in the desktop version. */
  hideArrows: PropTypes.bool,
};

export default withStyles(styles)(AutoRotatingCarousel);
