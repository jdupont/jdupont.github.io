import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'material-ui/Card';

class HoverCard extends Component {
  constructor(props) {
    super(props);

    this.onStartHover = this.onStartHover.bind(this);
    this.onEndHover = this.onEndHover.bind(this);

    this.state = { mousedOver: false };
  }

  onStartHover() {
    this.setState({ mousedOver: true });
  }

  onEndHover() {
    this.setState({ mousedOver: false });
  }

  render() {
    const {
      onMouseOver, onMouseOut, onFocus, onBlur, ...other
    } = this.props;

    return (
      <Card
        onMouseOver={() => {
          if (onMouseOver) {
            onMouseOver();
          }

           this.onStartHover();
        }}
        onMouseOut={() => {
          if (onMouseOut) {
            onMouseOut();
          }

           this.onEndHover();
        }}
        onFocus={() => {
          if (onFocus) {
            onFocus();
          }

           this.onStartHover();
        }}
        onBlur={() => {
          if (onBlur) {
            onBlur();
          }

           this.onEndHover();
        }}
        raised={this.state.mousedOver}
        {...other}
      />
    );
  }
}

HoverCard.defaultProps = {
  onMouseOver: null,
  onMouseOut: null,
  onFocus: null,
  onBlur: null,
};

HoverCard.propTypes = {
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

export default HoverCard;
