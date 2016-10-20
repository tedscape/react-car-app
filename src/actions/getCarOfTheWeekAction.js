import { createAction } from 'redux-actions';
import * as types from '../constants/actionTypes';
import get from '../utils/ajax';
import baseUrl from '../utils/baseUrls';

const getCarOfTheWeek = createAction(
    types.FETCH_CAR_OF_THE_WEEK,
    () => {
      const url = `${baseUrl}/carOfTheWeek`;
      return get(url)
        .catch(() => ({
          errorMessage: 'An error occured during fetch',
        }));
    }
);
const getCarOfTheWeekDetails = createAction(
    types.FETCH_CAR_OF_THE_WEEK_DETAILS,
    (id) => {
      const url = `${baseUrl}/model/${id}`;
      return get(url)
        .catch(() => ({
          errorMessage: 'An error occured during fetch',
        }));
    }
);

export {
    getCarOfTheWeek,
    getCarOfTheWeekDetails,
};
