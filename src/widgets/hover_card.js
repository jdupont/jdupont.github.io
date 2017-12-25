import React, { Component } from 'react';
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
    return (
      <Card
        onMouseOver={this.onStartHover}
        onMouseOut={this.onEndHover}
        onFocus={this.onStartHover}
        onBlur={this.onEndHover}
        raised={this.state.mousedOver}
        {...this.props}
      />
    );
  }
}

export default HoverCard;
