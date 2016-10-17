import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import getRoutes from '../routes';

const Root = ({ store }) => (
  <Provider store={store}>
    {getRoutes()}
  </Provider>
);

Root.propTypes = {
  store: PropTypes.any,
};

export default Root;
