import React from 'react';
import { Route } from 'react-router-dom';

const PageTracker = () => (
  <Route
    path="/"
    render={({ location }) => {
      if (typeof window.ga === 'function') {
        window.ga('set', 'page', location.pathname + location.search);
        window.ga('send', 'pageview');
      }

      return null;
    }}
  />
);

export default PageTracker;
