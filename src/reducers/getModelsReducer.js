import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import * as types from '../constants/actionTypes';

/* action.payload = {
    selectedMake: {
        id: '1',
        name: 'bmw'
    },
    availableModels: [
        {
            name: 'name',
            price: 'price',
            id: 'id',
            make: 1,
            image: 'url'
        }
    ]
}
*/

const initialState = new Map({
  availableModels: [],
});
export default handleActions({
  [types.FETCH_MODELS]: (state, action) => (
    state
    .set('availableModels', action.payload.carMakes)
  ),
}, initialState);
