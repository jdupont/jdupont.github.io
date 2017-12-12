import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';

import 'typeface-kaushan-script';

const font = 'Kaushan Script';

const avatarStyles = theme => ({
  avatar: {
    color: theme.palette.secondary.A400,
    backgroundColor: theme.palette.primary[700],
    fontFamily: font,
  },
});

const JdAvatar = (props) => {
  const { classes } = props;

  return (
    <Avatar className={classes.avatar}>
      JD
    </Avatar>
  );
};

JdAvatar.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
};

export default withStyles(avatarStyles, { withTheme: true })(JdAvatar);
