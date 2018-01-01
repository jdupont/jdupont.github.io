import React from 'react';
import PropTypes from 'prop-types';

const BlogDate = (props) => {
  const {
    component, date, ...other
  } = props;

  const ComponentToRender = component;

  const locale = 'en-US';
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  return (
    <ComponentToRender {...other}>
      { new Date(date).toLocaleDateString(locale, options) }
    </ComponentToRender>
  );
};

BlogDate.defaultProps = {
  component: 'span',
};

BlogDate.propTypes = {
  date: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export default BlogDate;
