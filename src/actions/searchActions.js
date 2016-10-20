import { createAction } from 'redux-actions';
import * as types from '../constants/actionTypes';
import get from '../utils/ajax';
import baseUrl from '../utils/baseUrls';

const getAllMakes = createAction(types.FETCH_MAKES_FOR_SEARCH, () => {
  const url = `${baseUrl}/makes`;
  return get(url)
    .catch(response => (
      {
        errorMessage: response,
      }
    ));
});

const getModels = createAction(types.FETCH_MODELS_FOR_SEARCH, (makeId) => {
  const url = `${baseUrl}/models/${makeId}`;
  return get(url)
    .catch(response => (
      {
        errorMessage: response,
      }
    ));
});
const clearSearch = createAction(types.CLEAR_VALUES_SEARCH);
export {
  getAllMakes,
  getModels,
  clearSearch,
};
