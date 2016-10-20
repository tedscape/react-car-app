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
    let initialState = null;
    let newState = null;
    let listOfModels = null;
    let action = null;
    beforeEach(() => {
      action = {
        type: 'CLEAR_VALUES_SEARCH',
      };
      initialState = store.getState();
      store.dispatch(action);
      newState = store.getState();
      listOfModels = newState.searchPage.get('listOfModels');
    });
    it('should not habe newstate not equal to initialState', () => {
      expect(newState).to.not.equal(initialState);
    });
    it('should have no items in the list of models', () => {
      expect(listOfModels).to.have.length(0);
    });
    it('should have not items in the the listOfMakes', () => {
      expect(newState.searchPage.get('listOfMakes')).to.have.length(0);
    });
  });
  describe('When FETCH_MODELS_FOR_SEARCH_FULFILLED is the action', () => {
    const getStore = () => createStore(rootReducer, {});
    const store = getStore();
    let initialState = null;
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
      initialState = store.getState();
      store.dispatch(action);
      newState = store.getState();
      listOfModels = newState.searchPage.get('listOfModels');
    });
    it('should have newstate not equal to old state', () => {
      expect(newState).to.not.equal(initialState);
    });
    it('should have 2 items in the list of model', () => {
      expect(listOfModels).to.have.length(2);
    });
  });
  describe('When FETCH_MAKES_FOR_SEARCH_FULFILLED is the action', () => {
    let initialState = {
      searchPage: fromJS({
        listOfMakes: [],
      }),
    };
    const getStore = () => createStore(rootReducer, {});
    const store = getStore();
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
      initialState = store.getState();
      store.dispatch(action);
      newState = store.getState();
      listOfMakes = newState.searchPage.get('listOfMakes');
    });
    it('should have newstate not equal to old state', () => {
      expect(newState).to.not.equal(initialState);
    });
    it('should have 2 items in list of makes', () => {
      expect(listOfMakes).to.have.length(2);
    });
  });
});
