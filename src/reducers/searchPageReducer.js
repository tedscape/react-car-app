import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import * as types from '../constants/actionTypes';

const initialState = new Map({
  listOfMakes: [],
  listOfModels: [],
  loading: false,
  errorMessage: undefined,
});

const rejectedState = (state, action) =>
  state
    .set('errorMessage', action.payload);

export default handleActions({
  [`${types.FETCH_MAKES_FOR_SEARCH}_FULFILLED`]: (state, action) =>
    state
      .set('listOfMakes', action.payload)
      .set('errorMessage', undefined),
  [`${types.FETCH_MODELS_FOR_SEARCH}_FULFILLED`]: (state, action) =>
    state
      .set('listOfModels', action.payload.map(item => (
        {
          id: item.id,
          name: item.name,
        }
    )))
    .set('errorMessage', undefined),
  [`${types.FETCH_MODELS_FOR_SEARCH}_PENDING`]: state =>
    state
      .set('errorMessage', undefined)
      .set('listOfModels', []),
  [`${types.FETCH_MAKES_FOR_SEARCH}_PENDING`]: state =>
    state
      .set('errorMessage', undefined)
      .set('listOfMakes', []),
  [`${types.FETCH_MODELS_FOR_SEARCH}_REJECTED`]: rejectedState,
  [`${types.FETCH_MAKES_FOR_SEARCH}_REJECTED`]: rejectedState,
  [`${types.FETCH_MAKES_FOR_SEARCH}_REJECTED`]: rejectedState,
  [types.CLEAR_VALUES_SEARCH]: state =>
    state
      .set('listOfModels', [])
      .set('listOfMakes', []),
}, initialState);
