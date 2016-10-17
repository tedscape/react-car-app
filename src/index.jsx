import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import Root from './containers/Root';

// eslint-disable-next-line 
const initialState = {};
const store = configureStore(initialState);
const RootContainer = require('./containers/Root').default;

render(
  <AppContainer>
    <Root
      store={store}
    />
  </AppContainer>,
  document.getElementById('root')
);
if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    render(
      <AppContainer>
        <RootContainer
          store={store}
        />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
