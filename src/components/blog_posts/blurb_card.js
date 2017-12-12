import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import BlurbTextHeader from './blurb_text_header';
import BlurbMediaHeader from './blurb_media_header';

const blogCardStyle = () => ({
  actions: {
    justifyContent: 'flex-end',
  },
});

class BlurbCard extends Component {
  constructor(props) {
    super(props);

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);

    this.state = { mousedOver: false };
  }

  onMouseOver() {
    this.setState({ mousedOver: true });
  }

  onMouseOut() {
    this.setState({ mousedOver: false });
  }

  render() {
    const { classes } = this.props;

    const header = this.props.image ?
      (<BlurbMediaHeader
        image={this.props.image}
        title={this.props.title}
        date={this.props.date}
      />) :
      (<BlurbTextHeader title={this.props.title} date={this.props.date} />);

    return (
      <Card
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        raised={this.state.mousedOver}
      >
        { header }
        <CardContent>
          <Typography component="p">
            {this.props.preview}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} >
          <Button dense>READ</Button>
        </CardActions>
      </Card>
    );
  }
}

BlurbCard.defaultProps = {
  image: null,
};

BlurbCard.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default withStyles(blogCardStyle)(BlurbCard);
