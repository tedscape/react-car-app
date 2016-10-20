import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import * as types from '../constants/actionTypes';

const initialState = new Map({
  carDetails: undefined,
  errorMessage: undefined,
});
const pendingState = state =>
  state
    .set('carDetails', undefined)
    .set('errorMessage', undefined);

const rejectedState = (state, action) =>
  state
    .set('errorMessage', action.payload)
    .set('carDetails', undefined);

export default handleActions({
  [`${types.FETCH_MODEL_DETAILS}_FULFILLED`]: (state, action) => (
    state
    .set('carDetails', action.payload)
    .set('errorMessage', undefined)),
  [`${types.FETCH_MODEL_DETAILS}_PENDING`]: pendingState,
  [`${types.FETCH_MODEL_DETAILS}_REJECTED`]: rejectedState,
}, initialState);
