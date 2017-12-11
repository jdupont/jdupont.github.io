import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const blogCardStyle = theme => ({
  dateStyle: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
  actions: {
    justifyContent: 'flex-end',
  },
  media: {
    height: 194,
  },
});

const BlogPostCard = (props) => {
  const { classes } = props;

  let media = null;
  if (props.image) {
    media = (
      <CardMedia className={classes.media} image={props.image} />
    );
  }

  return (
    <Card>
      {media}
      <CardContent>
        <Typography type="headline" component="h2">
          {props.title}
        </Typography>
        <Typography className={classes.dateStyle}>{props.date}</Typography>
        <Typography component="p">
          {props.preview}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions} >
        <Button dense>READ</Button>
      </CardActions>
    </Card>
  );
};

BlogPostCard.defaultProps = {
  image: null,
};

BlogPostCard.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default withStyles(blogCardStyle, { withTheme: true })(BlogPostCard);
