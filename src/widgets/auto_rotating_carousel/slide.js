import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    height: '100%',
  },
  captionContainer: {
    height: '20%',
  },
  caption: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.contrastText,
  },
  rootMobileLandscape: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
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
  mediaMobile: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  mediaBackground: {
    // backgroundColor: theme.palette.primary.light,
    backgroundColor: theme.palette.background.default,
    height: '80%',
    textAlign: 'center',
  },
  mediaBackgroundMobile: {
    height: 'calc(100% - 241px)',
  },
  mediaBackgroundMobileLandscape: {
    height: '100%',
    flex: '1 1',
    alignSelf: 'stretch',
  },
});

const Slide = (props) => {
  const {
    classes,
    media,
    mobile,
    landscape: landscapeProp,
    caption,
    ...other
  } = props;

  const mobileLandscape = mobile && landscapeProp;

  return (
    <div
      className={classNames(classes.root, {
        [classes.rootMobile]: mobile,
        [classes.rootMobileLandscape]: mobileLandscape,
      })}
      {...other}
    >
      <div className={classNames(classes.mediaBackground, {
        [classes.mediaBackgroundMobile]: mobile,
        [classes.mediaBackgroundMobileLandscape]: mobileLandscape,
      })}
      >
        <div className={classNames(classes.media, {
          [classes.mediaMobile]: mobile,
          [classes.mediaMobileLandscape]: mobileLandscape,
        })}
        >
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

Slide.defaultProps = {
  mobile: false,
  landscape: false,
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
  /**
   * If `true`, the screen width and height is filled.
   * @ignore
   */
  mobile: PropTypes.bool,
  /**
   * If `true`, slide will adjust content for wide mobile screens.
   * @ignore
   */
  landscape: PropTypes.bool,
};

export default withStyles(styles, { withTheme: true })(Slide);
