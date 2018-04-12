import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';

import Dot from './dot';
import ActiveDot from './active_dot';

const styles = () => ({
  dots: {
    position: 'relative',
    padding: '20px 0 28px',
  },
  dotOuter: {
    width: 8,
    height: 8,
    padding: 4,
    float: 'left',
    position: 'absolute',
  },
});

class Dots extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      previousIndex: props.index || 0,
    };
  }

  componentWillReceiveProps({ index }) {
    if (index !== this.props.index) {
      this.setState({ previousIndex: this.props.index });

      this.timeout = setTimeout(() => {
        this.timeout = null;
        this.setState({ previousIndex: index });
      }, 450);
    }
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  handleDotClick = (index, event) => {
    const { onDotClick } = this.props;

    if (onDotClick) {
      onDotClick(index, event);
    }
  }

  render() {
    const {
      classes,
      count,
      index,
      style,
      onDotClick,
      theme,
      ...other
    } = this.props;
    const { previousIndex } = this.state;

    return (
      <div style={{ ...style, width: count * 16 }} {...other}>
        <div className={classes.dots}>
          {[...Array(count).keys()].map(i => (
            <div
              key={i}
              className={classes.dotOuter}
              style={{
                left: i * 16,
                cursor: onDotClick != null ? 'pointer' : 'inherit',
              }}
              onClick={event => this.handleDotClick(i, event)}
              onKeyPress={() => {}}
              role="button"
              tabIndex={0}
            >
              <Dot
                style={{
                  opacity: i >= Math.min(previousIndex, index) &&
                    i <= Math.max(previousIndex, index) ? 0 : 0.5,
                }}
              />
            </div>
          ))}
          <ActiveDot previousIndex={previousIndex} index={index} />
        </div>
      </div>
    );
  }
}

Dots.defaultProps = {
  style: {},
  onDotClick: undefined,
};

Dots.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  style: PropTypes.object,
  /* eslint-enable react/forbid-prop-types */
  count: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onDotClick: PropTypes.func,
};

export default withStyles(styles, { withTheme: true })(Dots);
