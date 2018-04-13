import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    height: '100%',
  },
  captionContainer: {
    height: '20%',
  },
  caption: {
    padding: theme.spacing.unit,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.contrastText,
  },
  media: {
    padding: theme.spacing.unit,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      maxHeight: '100%',
    },
  },
  mediaBackground: {
    backgroundColor: theme.palette.background.default,
    height: '80%',
    textAlign: 'center',
  },
});

const Slide = (props) => {
  const {
    classes,
    media,
    caption,
    ...other
  } = props;

  return (
    <div className={classes.root} {...other}>
      <div className={classes.mediaBackground}>
        <div className={classes.media}>
          { media }
        </div>
      </div>
      <div className={classes.captionContainer}>
        <div className={classes.caption}>
          { caption }
        </div>
      </div>
    </div>
  );
};

Slide.propTypes = {
  /**
   * Useful to extend the style applied to components.
   */
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  /**
   * Object to display in the upper half.
   */
  media: PropTypes.node.isRequired,
  caption: PropTypes.node.isRequired,
};

export default withStyles(styles, { withTheme: true })(Slide);
