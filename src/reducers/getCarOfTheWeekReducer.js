import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import * as types from '../constants/actionTypes';

const initialState = new Map({
  review: '',
  modelId: undefined,
  carDetails: undefined,
  errorMessage: undefined,
});

const pendingState = state =>
  state
    .set('errorMessage', undefined);

const rejectedState = (state, action) =>
  state
    .set('errorMessage', action.payload);

export default handleActions({
  [`${types.FETCH_CAR_OF_THE_WEEK}_FULFILLED`]: (state, action) => (
    state
    .set('review', action.payload.review)
    .set('id', action.payload.modelId)
    .set('errorMessage', undefined)
  ),
  [`${types.FETCH_CAR_OF_THE_WEEK_DETAILS}_FULFILLED`]: (state, action) => (
    state
    .set('carDetails', action.payload)
    .set('errorMessage', undefined)
  ),
  [`${types.FETCH_CAR_OF_THE_WEEK}_PENDING`]: pendingState,
  [`${types.FETCH_CAR_OF_THE_WEEK}_REJECTED`]: rejectedState,
  [`${types.FETCH_CAR_OF_THE_WEEK_DETAILS}_PENDING`]: pendingState,
  [`${types.FETCH_CAR_OF_THE_WEEK_DETAILS}_REJECTED`]: rejectedState,
}, initialState);
