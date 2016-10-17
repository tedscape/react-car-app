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
} from './pages';
import CoreLayout from './layouts/coreLayout';

const routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={CoreLayout}>
      <IndexRoute component={HomePage} />
      <Route path=":make/:model/:id" component={DetailsPage} />
      <Route path="Search" component={SearchPage} />
    </Route>
  </Router>
);
export default routes;
// <Route path="*" component={NotFoundPage} status={404} />
