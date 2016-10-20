
import React from 'react';
import { shallow } from 'enzyme';
import PageHeaderComponent from './PageHeaderComponent';

const appName = 'Caaaaaaars';
const navMenuItems = [
  {
    id: '0',
    link: '/',
    text: 'Home',
  },
  {
    id: '1',
    link: '/Search',
    text: 'Search',
  },
];
const wrapper = shallow(<PageHeaderComponent appName={appName} menuItems={navMenuItems} />);

describe('<PageHeaderComponent />', () => {
  it('should render without breaking', () => {
    expect(wrapper).to.have.length(1);
  });
  it('should render appName passed in', () => {
    expect(wrapper.html()).to.contain(appName);
  });
  it('should have 2 navigation links', () => {
    expect(wrapper.find('ul li')).to.have.length(2);
  });
});
