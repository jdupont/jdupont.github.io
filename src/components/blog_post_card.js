import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const blogCardStyle = theme => ({
  dateStyle: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});

const BlogPostCard = (props) => {
  const { classes } = props;

  return (
    <Card>
      <CardContent>
        <Typography type="headline" component="h2">
          {props.title}
        </Typography>
        <Typography className={classes.dateStyle}>{props.date}</Typography>
        <Typography component="p">
          {props.preview}
        </Typography>
      </CardContent>
      <CardActions>
        <Button dense>READ</Button>
      </CardActions>
    </Card>
  );
};

BlogPostCard.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
};

export default withStyles(blogCardStyle, { withTheme: true })(BlogPostCard);
