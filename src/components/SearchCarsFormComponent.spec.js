
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SearchCarsFormComponent from './SearchCarsFormComponent';
import rootReducer from '../reducers';

describe('<SearchCarsFormComponent />', () => {
  const getStore = () => createStore(rootReducer, {});
  const wrapper = mount(
    <Provider store={getStore()}>
      <SearchCarsFormComponent listOfModels={[]} />
    </Provider>);

  it('should render without breaking', () => {
    expect(wrapper).to.have.length(1);
  });
  it('should have input select box of name carMake', () => {
    expect(wrapper.find('select[name="carMake"]')).to.have.length(1);
  });
  it('should have input select box of name carModel', () => {
    expect(wrapper.find('select[name="carModel"]')).to.have.length(1);
  });
  it('should have input button', () => {
    expect(wrapper.find('button')).to.have.length(1);
  });
  it('should have car model select disabled', () => {
    const isDisabled = wrapper.find('select[name="carModel"]').props().disabled;
    expect(isDisabled).to.equals(true);
  });
});

describe('<SearchCarsFormComponent /> with list of makes and models', () => {
  const getStore = () => createStore(rootReducer, {});
  const listOfMakes = [
    {
      id: 10,
      name: 'Porsche',
    },
    {
      id: 20,
      name: 'Nissan',
    },
    {
      id: 30,
      name: 'BMW',
    },
    {
      id: 40,
      name: 'Audi',
    },
    {
      id: 50,
      name: 'Mazda',
    },
  ];
  const listOfModels = [
    {
      id: 100,
      makeId: 10,
      name: '911 Carrera 4s',
      price: 297130,
      imageUrl: 'http://files1.porsche.com/filestore/image/multimedia/none/991-2nd-c4s-modelimage-sideshot/model/15bd09cf-553b-11e5-8c32-0019999cd470;s25/porsche-model.png',
    },
    {
      id: 110,
      makeId: 10,
      name: 'Cayenne GTS',
      price: 171605,
      imageUrl: 'http://files3.porsche.com/filestore/image/multimedia/none/rd-2013-9pa-e2-2nd-gts-modelimage-sideshot/model/c287d350-5920-11e4-99aa-001a64c55f5c;s25/porsche-model.png',
    },
  ];
  const wrapper = mount(
    <Provider store={getStore()}>
      <SearchCarsFormComponent
        listOfModels={listOfModels}
        listOfMakes={listOfMakes}
        selectedMakeId="10"
        selectedModelId="100"
      />
    </Provider>);
  it('should not have the button enabled when values are selected', () => {
    const isDisabled = wrapper.find('button').props().disabled;
    expect(isDisabled).to.equal(false);
  });
});
describe('<SearchCarsFormComponent /> with list of makes and empty list of models', () => {
  const getStore = () => createStore(rootReducer, {});
  const listOfMakes = [
    {
      id: 10,
      name: 'Porsche',
    },
    {
      id: 20,
      name: 'Nissan',
    },
    {
      id: 30,
      name: 'BMW',
    },
    {
      id: 40,
      name: 'Audi',
    },
    {
      id: 50,
      name: 'Mazda',
    },
  ];
  const wrapper = mount(
    <Provider store={getStore()}>
      <SearchCarsFormComponent
        listOfModels={[]}
        listOfMakes={listOfMakes}
      />
    </Provider>);
  it('carModel is disabled when makesList is not selected', () => {
    const isDisabled = wrapper.find('#carModel').props().disabled;
    expect(isDisabled).to.equal(true);
  });
  it('should not have the button enabled when values are selected', () => {
    const isDisabled = wrapper.find('button').props().disabled;
    expect(isDisabled).to.equal(true);
  });
});
