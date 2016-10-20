import { expect } from 'chai';
import { createStore } from 'redux';
import { fromJS } from 'immutable';
import rootReducer from './index';

describe('getCarOfTheWeekReducer', () => {
  describe('When FETCH_CAR_OF_THE_WEEK_FULFILLED is the action', () => {
    const getStore = () => createStore(rootReducer, {});
    const store = getStore();
    let initialState = null;
    let newState = null;
    let selectedModelReview = null;
    let action = null;
    beforeEach(() => {
      action = {
        type: 'FETCH_CAR_OF_THE_WEEK_FULFILLED',
        payload: {
          review: 'REVIEW',
          id: 10,
        },
      };
      initialState = store.getState();
      store.dispatch(action);
      newState = store.getState();
      selectedModelReview = newState.carOfTheWeek.get('review');
    });
    it('newstate not equal to initialState', () => {
      expect(newState).to.not.equal(initialState);
    });
    it('the car model id passed in the action should be the one in the state', () => {
      expect(selectedModelReview).to.equal(action.payload.review);
    });
  });
  describe('When FETCH_CAR_OF_THE_WEEK_PENDING is the action', () => {
    let initialState = {
      carOfTheWeek: fromJS({
        errorMessage: 'SOME ERROR',
      }),
    };
    const getStore = () => createStore(rootReducer, initialState);
    const store = getStore();
    let newState = null;
    let errorMessage = null;
    let action = null;

    beforeEach(() => {
      action = {
        type: 'FETCH_CAR_OF_THE_WEEK_PENDING',
      };
      initialState = store.getState();
      store.dispatch(action);
      newState = store.getState();
    });
    it('newstate equal not to initialState(by design)', () => {
      expect(newState).to.not.equal(initialState);
    });
    it('the car model id passed in the action should be the one in the state', () => {
      errorMessage = newState.carOfTheWeek.get('errorMessage');
      expect(errorMessage).to.be.an('undefined');
    });
  });
  describe('When FETCH_CAR_OF_THE_WEEK_DETAILS_FULFILLED is the action', () => {
    const getStore = () => createStore(rootReducer, {});
    const store = getStore();
    let initialState = null;
    let newState = null;
    let carDetails = null;
    let action = null;

    beforeEach(() => {
      action = {
        type: 'FETCH_CAR_OF_THE_WEEK_DETAILS_FULFILLED',
        payload: {
          name: 'HYUNDAI',
        },
      };
      initialState = store.getState();
      store.dispatch(action);
      newState = store.getState();
      carDetails = newState.carOfTheWeek.get('carDetails');
    });
    it('newstate not equal to initialState(by design)', () => {
      expect(newState).to.not.equal(initialState);
    });
    it('the car model id passed in the action should be the one in the state', () => {
      expect(carDetails.name).to.equal(action.payload.name);
    });
  });
});
