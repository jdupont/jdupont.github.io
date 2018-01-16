import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';

import 'typeface-kaushan-script';

const font = 'Kaushan Script';

const avatarStyles = theme => ({
  avatar: {
    backgroundColor: theme.palette.primary[700],
    textDecoration: 'none',
    justifyContent: 'center',
  },
  avatarText: {
    color: theme.palette.secondary.A400,
    fontFamily: font,
    fontSize: 'smaller',
  },
});

const JdAvatar = (props) => {
  const { classes } = props;

  return (
    <Avatar
      className={classes.avatar}
      component={Link}
      to="/about"
      elevation={15}
    >
      <Typography className={classes.avatarText}>
        JD
      </Typography>
    </Avatar>
  );
};

JdAvatar.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
};

export default withStyles(avatarStyles, { withTheme: true })(JdAvatar);
