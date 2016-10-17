import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import * as types from '../constants/actionTypes';

const initialState = new Map({});
export default handleActions({
  [types.FETCH_CAR_OF_THE_DAY]: state => state,
}, initialState);
