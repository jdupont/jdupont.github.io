import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';

import Dot from './dot';

const styles = () => ({});

const ActiveDot = (props) => {
  const {
    previousIndex,
    index,
    theme,
  } = props;

  return (
    <Dot
      style={{
        left: (Math.min(previousIndex, index) * 16) + 4,
        width: (Math.abs(previousIndex - index) * 16) + 8,
        position: 'absolute',
        marginTop: 4,
        backgroundColor: theme.palette.secondary.main,
      }}
    />
  );
};

ActiveDot.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  theme: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  previousIndex: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default withStyles(styles, { withTheme: true })(ActiveDot);
