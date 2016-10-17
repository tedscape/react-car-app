import React from 'react';
import {
    Route,
    Router,
    browserHistory,
    IndexRoute,
} from 'react-router';
import {
  HomePageContainer,
  SearchCarsContainer,
  CarDetailsContainer,
  // NotFoundPage,
} from './containers';
import CoreLayout from './layouts/CoreLayout';

const routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={CoreLayout}>
      <IndexRoute component={HomePageContainer} />
      <Route path=":make/:model/:id" component={CarDetailsContainer} />
      <Route path="Search" component={SearchCarsContainer} />
    </Route>
  </Router>
);
export default routes;
// <Route path="*" component={NotFoundPage} status={404} />
