import React from 'react';
import { shallow } from 'enzyme';
import CarDetailsComponent from './CarDetailsComponent';

const make = 'BMW';
const model = 'X6';
const description = 'DESCRIPTION';
const wrapper = shallow(<CarDetailsComponent make={make} name={model} description={description} />);

describe('<CarDetailsComponent />', () => {
  it('should renders without break', () => {
    expect(wrapper).to.have.length(1);
  });
  it('should render make and model names', () => {
    expect(wrapper.html()).to.contain(`${make} ${model}`);
  });
  it('should render description', () => {
    expect(wrapper.html()).to.contain(description);
  });
});
