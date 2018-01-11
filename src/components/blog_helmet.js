import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { BLOG_NAME } from '../docs/blog_constants.js';

const BlogHelmet = ({ pageTitle }) => {
  let title;

  if (pageTitle) {
    title = `${pageTitle} | ${BLOG_NAME}`;
  } else {
    title = BLOG_NAME;
  }

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

BlogHelmet.defaultProps = {
  pageTitle: null,
};

BlogHelmet.propTypes = {
  pageTitle: PropTypes.string,
};

export default BlogHelmet;
