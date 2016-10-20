import { createAction } from 'redux-actions';
import * as types from '../constants/actionTypes';

const getModel = createAction(types.FETCH_MODEL_DETAILS, (modelId) => {
  const url = `http://localhost:8080/model/${modelId}`;
  return fetch(url)
    .then(response => response.json())
    .catch(response => (
      {
        errorMessage: response,
      }
    ));
});

export default getModel;
