import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

const configureStore = (initialState) => {
  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers()
  );
};

export default configureStore;
