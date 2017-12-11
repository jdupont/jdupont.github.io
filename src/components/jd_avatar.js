import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';

import 'typeface-kaushan-script';

const font = 'Kaushan Script';

const avatarStyles = theme => ({
  avatar: {
    color: theme.palette.secondary[500],
    backgroundColor: theme.palette.primary[400],
    fontFamily: font,
  },
  logoFont: {
    fontFamily: font,
  },
});

const JdAvatar = (props) => {
  const { classes } = props;

  return (
    <Avatar className={classes.avatar}>
      <Typography color="accent" className={props.classes.logoFont}>JD</Typography>
    </Avatar>
  );
};

JdAvatar.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
};

export default withStyles(avatarStyles, { withTheme: true })(JdAvatar);
