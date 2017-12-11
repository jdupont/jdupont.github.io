import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CardHeader } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';

const textHeaderStyles = theme => ({
  dateStyle: {
    color: theme.palette.text.secondary,
  },
});

const BlurbTextHeader = (props) => {
  const { classes } = props;
  return (
    <CardHeader
      title={(
        <Typography type="headline" component="h2">
          {props.title}
        </Typography>)}
      subheader={(
        <Typography className={classes.dateStyle}>{props.date}</Typography>
      )}
      avatar={(
        <Avatar>J</Avatar>
      )}
    />
  );
};

BlurbTextHeader.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default withStyles(textHeaderStyles, { withTheme: true })(BlurbTextHeader);
