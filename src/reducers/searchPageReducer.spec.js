import { expect } from 'chai';
import { createStore } from 'redux';
import { fromJS } from 'immutable';
import rootReducer from './index';

describe('searchPageReducer', () => {
  describe('When CLEAR_VALUES_SEARCH is called', () => {
    const getStore = () => createStore(rootReducer,
      {
        searchPage:
        fromJS({
          listOfModels: [
            {
              id: 1,
            },
            {
              id: 2,
            },
          ],
          listOfMakes: [
            {
              id: 1,
            },
            {
              id: 2,
            },
          ] }),
      });
    const store = getStore();
    let oldState = null;
    let newState = null;
    let listOfModels = null;
    let action = null;
    beforeEach(() => {
      action = {
        type: 'CLEAR_VALUES_SEARCH',
      };
      oldState = store.getState();
      store.dispatch(action);
      newState = store.getState();
      listOfModels = newState.searchPage.get('listOfModels');
    });
    it('newstate not equal to old state', () => {
      expect(newState).to.not.equal(oldState);
    });
    it('the list of models should have length 0', () => {
      expect(listOfModels).to.have.length(0);
    });
    it('the list of makes should have length 0', () => {
      expect(newState.searchPage.get('listOfMakes')).to.have.length(0);
    });
  });
  describe('When FETCH_MODELS_FOR_SEARCH_FULFILLED is the action', () => {
    const getStore = () => createStore(rootReducer, {});
    const store = getStore();
    let oldState = null;
    let newState = null;
    let listOfModels = null;
    let action = null;

    beforeEach(() => {
      action = {
        type: 'FETCH_MODELS_FOR_SEARCH_FULFILLED',
        payload: [
          {
            id: 1,
          },
          {
            id: 2,
          },
        ],
      };
      oldState = store.getState();
      store.dispatch(action);
      newState = store.getState();
      listOfModels = newState.searchPage.get('listOfModels');
    });
    it('newstate equal to old state(by design)', () => {
      expect(newState).to.not.equal(oldState);
    });
    it('list of models should have length 2', () => {
      expect(listOfModels).to.have.length(2);
    });
  });
  describe('When FETCH_MAKES_FOR_SEARCH_FULFILLED is the action', () => {
    const getStore = () => createStore(rootReducer, {});
    const store = getStore();
    let oldState = null;
    let newState = null;
    let listOfMakes = null;
    let action = null;

    beforeEach(() => {
      action = {
        type: 'FETCH_MAKES_FOR_SEARCH_FULFILLED',
        payload: [
          {
            id: 1,
          },
          {
            id: 2,
          },
        ],
      };
      oldState = store.getState();
      store.dispatch(action);
      newState = store.getState();
      listOfMakes = newState.searchPage.get('listOfMakes');
    });
    it('newstate equal to old state(by design)', () => {
      expect(newState).to.not.equal(oldState);
    });
    it('list of models should have length 2', () => {
      expect(listOfMakes).to.have.length(2);
    });
  });
});
