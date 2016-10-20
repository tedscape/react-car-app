import React, { PropTypes } from 'react';
// import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';

const PageHeaderComponent = ({ appName, menuItems }) =>
(

  <nav className="navbar navbar-light bg-faded">
    <Link
      to="/"
      className="navbar-brand"
    >
      {appName}
    </Link>
    <ul className="nav navbar-nav">
      {
        menuItems.map(item => (
          <li className="nav-item" key={item.id}>
            <Link
              key={item.id}
              to={item.link}
              className="nav-link"
            >
              {item.text}
            </Link>
          </li>
        ))
        }
    </ul>
  </nav>
);
PageHeaderComponent.propTypes = {
  appName: PropTypes.any,
  menuItems: PropTypes.any,

};
PageHeaderComponent.defaultProps = {
  menuItems: [],
};

export default PageHeaderComponent;
