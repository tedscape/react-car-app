import React, { PropTypes } from 'react';
import { PageHeaderComponent } from '../components';
import './CoreLayout.css';

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

const CoreLayout = ({ children }) => (
  <div>
    <PageHeaderComponent appName="Caaaars" menuItems={navMenuItems} />
    <div className="layout-content mx-auto py-2 px-1">
      {children}
    </div>
  </div>
);
CoreLayout.propTypes = {
  children: PropTypes.any,
};

export default CoreLayout;
