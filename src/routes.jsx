import React from 'react';
import {
    Route,
    Router,
    browserHistory,
    IndexRoute,
} from 'react-router';
import {
  HomePage,
  SearchPage,
  DetailsPage,
  // NotFoundPage,
} from './containers/pages';
import CoreLayout from './layouts/coreLayout';

const routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={CoreLayout}>
      <IndexRoute component={HomePage} />
      <Route path="make" component={DetailsPage}>
        <Route path="model/:id" component={SearchPage} />
      </Route>
      <Route path="Search" component={SearchPage} />
    </Route>
  </Router>
);
export default routes;
// <Route path="*" component={NotFoundPage} status={404} />
