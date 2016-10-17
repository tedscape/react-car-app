import React, { PropTypes } from 'react';
import { PageHeaderComponent } from '../components';

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
    <div className="container">
      {children}
    </div>
  </div>
);
CoreLayout.propTypes = {
  children: PropTypes.any,
};

export default CoreLayout;
