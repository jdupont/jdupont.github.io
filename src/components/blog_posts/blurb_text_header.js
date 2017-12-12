import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { emphasize } from 'material-ui/styles/colorManipulator';
import { CardHeader } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import JdAvatar from '../jd_avatar';

const textHeaderStyles = theme => ({
  text: {
    color: theme.palette.background.default,
  },
  textHeader: {
    background: emphasize(theme.palette.primary[300], 0.26),
    flexGrow: 1,
  },
});

const BlurbTextHeader = (props) => {
  const { classes } = props;
  return (
    <CardHeader
      className={classes.textHeader}
      title={(
        <Typography type="headline" component="h2" className={classes.text}>
          {props.title}
        </Typography>)}
      subheader={(
        <Typography className={classes.text}>
          {props.date}
        </Typography>
      )}
      avatar={(
        <JdAvatar />
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
