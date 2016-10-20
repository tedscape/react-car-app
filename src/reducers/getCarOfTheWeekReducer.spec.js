import { expect } from 'chai';
import { createStore } from 'redux';
import rootReducer from './index';

describe('getCarOfTheWeekReducer', () => {
  describe('When FETCH_CAR_OF_THE_WEEK_FULFILLED is the action', () => {
    const getStore = () => createStore(rootReducer, {});
    const store = getStore();
    let oldState = null;
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
      oldState = store.getState();
      store.dispatch(action);
      newState = store.getState();
      selectedModelReview = newState.carOfTheWeek.get('review');
    });
    it('newstate not equal to old state', () => {
      expect(newState).to.not.equal(oldState);
    });
    it('the car model id passed in the action should be the one in the state', () => {
      expect(selectedModelReview).to.equal(action.payload.review);
    });
  });
  describe('When FETCH_CAR_OF_THE_WEEK_PENDING is the action', () => {
    const getStore = () => createStore(rootReducer, {});
    const store = getStore();
    let oldState = null;
    let newState = null;
    let errorMessage = null;
    let action = null;

    beforeEach(() => {
      action = {
        type: 'FETCH_CAR_OF_THE_WEEK_PENDING',
        payload: {
          errorMessage: 'ERROR',
        },
      };
      oldState = store.getState();
      store.dispatch(action);
      newState = store.getState();
      errorMessage = newState.carOfTheWeek.get('errorMessage');
    });
    it('newstate equal to old state(by design)', () => {
      expect(newState).to.equal(oldState);
    });
    it('the car model id passed in the action should be the one in the state', () => {
      expect(errorMessage).to.be.an('undefined');
    });
  });
  describe('When FETCH_CAR_OF_THE_WEEK_DETAILS_FULFILLED is the action', () => {
    const getStore = () => createStore(rootReducer, {});
    const store = getStore();
    let oldState = null;
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
      oldState = store.getState();
      store.dispatch(action);
      newState = store.getState();
      carDetails = newState.carOfTheWeek.get('carDetails');
    });
    it('newstate not equal to old state(by design)', () => {
      expect(newState).to.not.equal(oldState);
    });
    it('the car model id passed in the action should be the one in the state', () => {
      expect(carDetails.name).to.equal(action.payload.name);
    });
  });
});
