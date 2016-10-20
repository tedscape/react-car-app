import { expect } from 'chai';
import { createStore } from 'redux';
import rootReducer from './index';

describe('getCarDetailsReducer', () => {
  describe('When FETCH_MODEL_DETAILS_FULFILLED is the action', () => {
    const getStore = () => createStore(rootReducer, {});
    const store = getStore();
    let oldState = null;
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
      oldState = store.getState();
      store.dispatch(action);
      newState = store.getState();
      selectedModel = newState.selectedModel.get('carDetails');
    });
    it('newstate not equal to old state', () => {
      expect(newState).to.not.equal(oldState);
    });
    it('the car model id passed in the action should be the one in the state', () => {
      expect(selectedModel.carDetails.id).to.equal(action.payload.carDetails.id);
    });
  });
  describe('When FETCH_MODEL_DETAILS_PENDING is the action', () => {
    const getStore = () => createStore(rootReducer, {});
    const store = getStore();
    let oldState = null;
    let newState = null;
    let carDetails = null;
    let action = null;

    beforeEach(() => {
      action = {
        type: 'FETCH_MODEL_DETAILS_PENDING',
        payload: {},
      };
      oldState = store.getState();
      store.dispatch(action);
      newState = store.getState();
      carDetails = newState.selectedModel.get('carDetails');
    });
    it('newstate equal to old state(by design)', () => {
      expect(newState).to.equal(oldState);
    });
    it('the car model id passed in the action should be the one in the state', () => {
      expect(carDetails).to.be.an('undefined');
    });
  });
});
