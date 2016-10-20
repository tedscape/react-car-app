import { expect } from 'chai';
import { createStore } from 'redux';
import { fromJS } from 'immutable';
import rootReducer from './index';

describe('getCarDetailsReducer', () => {
  describe('When FETCH_MODEL_DETAILS_FULFILLED is the action the selectedModel', () => {
    const getStore = () => createStore(rootReducer, {});
    const store = getStore();
    let initialState = null;
    let newState = null;
    let selectedModel = null;
    let action = null;
    beforeEach(() => {
      action = {
        type: 'FETCH_MODEL_DETAILS_FULFILLED',
        payload: {
          carDetails: {
            name: 'a',
            id: 10,
          },
        },
      };
      initialState = store.getState();
      store.dispatch(action);
      newState = store.getState();
    });
    it('newstate not equal to old state', () => {
      expect(newState).to.not.equal(initialState);
    });
    it('shoudl have the car model id passed in the dispatch', () => {
      selectedModel = newState.selectedModel.get('carDetails');
      expect(selectedModel.carDetails.id).to.equal(action.payload.carDetails.id);
    });
  });
  describe('When FETCH_MODEL_DETAILS_PENDING is the action', () => {
    let newState = null;
    let initialState = {
      selectedModel: fromJS({
        carDetails: {},
      }),
    };
    const getStore = () => createStore(rootReducer, initialState);
    const store = getStore();
    let carDetails = null;
    let action = null;

    beforeEach(() => {
      action = {
        type: 'FETCH_MODEL_DETAILS_PENDING',
        payload: {},
      };
      initialState = store.getState();
      store.dispatch(action);
      newState = store.getState();
      carDetails = newState.selectedModel.get('carDetails');
    });
    it('newstate not equal to initial state', () => {
      expect(newState).to.not.equal(initialState);
    });
    it('the car model id passed in the action should be the one in the state', () => {
      expect(carDetails).to.be.an('undefined');
    });
  });
});
