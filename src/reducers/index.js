import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import searchPage from './searchPageReducer';
import selectedModel from './getCarDetailsReducer';
import carOfTheWeek from './getCarOfTheWeekReducer';

const rootReducer = combineReducers({
  carOfTheWeek,
  selectedModel,
  searchPage,
  form: formReducer,
});

export default rootReducer;
