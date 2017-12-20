import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import qs from 'qs';

const QueryRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={({ location, ...other }) => {
      const query = qs.parse(location.search.substr(1));
      return (
        <Component query={query} location={location} {...other} />
    );
  }}
  />
);

QueryRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};

export default QueryRoute;
