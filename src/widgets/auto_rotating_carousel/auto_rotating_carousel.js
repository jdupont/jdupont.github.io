import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Paper } from 'material-ui';
import { grey } from 'material-ui/colors';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import ArrowForwardIcon from 'material-ui-icons/ArrowForward';
import Dots from 'material-ui-dots';
import Carousel from './swipable_carousel_view';
import { modulo } from './util';

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
  carouselWrapper: {
    overflow: 'hidden',
    borderRadius: 14,
    transform: 'scale(1.0)',
    background: 'transparent',
    height: '100%',
  },
  arrowIcon: {
    color: grey[700],
  },
  root: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    transition: 'opacity 400ms cubic-bezier(0.4, 0, 0.2, 1)',
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
    paddingTop: 36,
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
  root: {
    height: '100%',
    width: '100%',
    position: 'fixed',
    left: 0,
    top: 0,
  },
  content: {},
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

export default class AutoRotatingCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { slideIndex: 0 };
  }

  onChange(slideIndex) {
    const { onImageChange, children } = this.props;

    if (onImageChange) {
      onImageChange(modulo(slideIndex, children.length));
    }
  }

  increaseIndex() {
    const slideIndex = this.state.slideIndex + 1;
    this.setState({ slideIndex }, this.onChange(slideIndex));
  }

  decreaseIndex() {
    const slideIndex = this.state.slideIndex - 1;
    this.setState({ slideIndex }, this.onChange(slideIndex));
  }

  handleChange = (slideIndex) => {
    this.setState({ slideIndex }, this.onChange(slideIndex));
  }

  render() {
    const { slideIndex } = this.state;
    const {
      mobile,
      rootStyle,
      contentStyle,
      autoplay,
      interval,
      children,
      hideArrows,
    } = this.props;

    const style = mobile ? mobileStyles : desktopStyles;

    return (
      <div
        style={{
          ...style.root,
          ...rootStyle,
        }}
      >
        <div
          style={{ ...style.content, ...contentStyle }}
          onClick={evt => evt.stopPropagation() || evt.preventDefault()}
        >
          <Paper style={style.carouselWrapper}>
            <Carousel
              autoplay={autoplay}
              interval={interval}
              index={slideIndex}
              onChangeIndex={this.handleChange}
              style={style.carousel}
              containerStyle={style.carouselContainer}
              slideStyle={style.slide}
            >
              {children.map((c, i) => React.cloneElement(c, {
                mobile,
                key: i,
              }))}
            </Carousel>
          </Paper>
          <div>
            <div style={style.footer}>
              <Dots
                count={children.length}
                index={modulo(slideIndex, children.length)}
                style={style.dots}
                onDotClick={this.handleChange}
                dotColor={this.props.dotColor}
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
  interval: 3000,
  mobile: false,
  hideArrows: false,
  dotColor: undefined,
  contentStyle: {},
  rootStyle: {},
  onImageChange: undefined,
};

AutoRotatingCarousel.propTypes = {
  children: PropTypes.node.isRequired,
  /** If `false`, the auto play behavior is disabled. */
  autoplay: PropTypes.bool,
  /* eslint-disable react/forbid-prop-types */
  /** Override the inline-styles of the content container. */
  contentStyle: PropTypes.object,
  /** Override the inline-styles of the root component. */
  rootStyle: PropTypes.object,
  /* eslint-enable react/forbid-prop-types */
  /** Delay between auto play transitions (in ms). */
  interval: PropTypes.number,
  /** If `true`, the screen width and height is filled. */
  mobile: PropTypes.bool,
  /** Fired when the index changed. Returns current index. */
  onImageChange: PropTypes.func,
  /** If `true`, the left and right arrows are hidden in the desktop version. */
  hideArrows: PropTypes.bool,
  /** Color of the dots used */
  dotColor: PropTypes.string,
};
