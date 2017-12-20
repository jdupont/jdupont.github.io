import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import qs from 'qs';

// http://localhost:3000/solve?challenge=24JDPkWmS6NGuWSLW&part=gWZfTTCdMLL6EPpky

const QueryLink = props => (
  <Link {...props} to={Object.assign({ search: qs.stringify(props.to.query) }, props.to)} />
);

QueryLink.propTypes = {
  to: PropTypes.shape({
    query: PropTypes.object,
  }).isRequired,
};

export default QueryLink;
