import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';

import { markdownStyles, marked } from './markdown_styling';

const styles = theme => ({
  markdown: markdownStyles(theme),
  noVerticalPadding: {
    '& p': {
      margin: '0px',
    },
  },
});

const MarkdownRenderer = (props) => {
  const {
    classes,
    markdown,
    removeVerticalPadding,
    className: classNameProp,
    ...other
  } = props;

  return (
    <div
      {...other}
      className={classnames(classes.markdown, { [`${classes.noVerticalPadding}`]: removeVerticalPadding }, classNameProp)}
      /* eslint-disable react/no-danger */
      dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      /* eslint-ensable react/no-danger */
    />
  );
};

MarkdownRenderer.defaultProps = {
  removeVerticalPadding: false,
  className: undefined,
};

MarkdownRenderer.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  markdown: PropTypes.string.isRequired,
  removeVerticalPadding: PropTypes.bool,
  className: PropTypes.string,
};

export default withStyles(styles)(MarkdownRenderer);
