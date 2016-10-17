import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import * as types from '../constants/actionTypes';

const initialState = new Map({
  carMakes: [],
});
export default handleActions({
  [types.FETCH_MAKES]: (state, action) => (
    state
    .set('carMakes',
      action.payload.carMakes)
  ),
}, initialState);
