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
  root: {
    height: '100%',
    width: '100%',
  },
  carouselWrapper: {
    overflow: 'hidden',
    borderRadius: 14,
    background: 'transparent',
    height: '100%',
  },
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
};

const desktopStyles = {
  content: {
    width: '80%',
    maxWidth: 700,
    height: '95%',
    maxHeight: 600,
    margin: '0 auto 0',
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
};

const mobileStyles = {
  content: {
    width: '100%',
    height: '100%',
    margin: '0 0 0',
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  dots: {
    margin: '0 auto',
  },
  footer: {
    marginTop: -92,
    width: '100%',
    position: 'relative',
    textAlign: 'center',
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
      <div className={classes.root} {...other}>
        <div style={{ ...style.content, ...contentStyle }}>
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
                className={classes.arrowLeft}
                onClick={() => this.decreaseIndex()}
              >
                <ArrowBackIcon className={classes.arrowIcon} />
              </Button>
              <Button
                variant="fab"
                className={classes.arrowRight}
                onClick={() => this.increaseIndex()}
              >
                <ArrowForwardIcon className={classes.arrowIcon} />
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
