import React, { PropTypes } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';

const PageHeaderComponent = ({ appName, menuItems }) =>
(
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">{appName}</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <ul className="nav navbar-nav">
        {
        menuItems.map(item => (
          <li className="nav nav-item" key={item.id}>
            <Link
              key={item.id}
              to={item.link}
            >
              {item.text}
            </Link>
          </li>
        ))
        }
      </ul>
    </Navbar.Collapse>
  </Navbar>
);
PageHeaderComponent.propTypes = {
  appName: PropTypes.any,
  menuItems: PropTypes.any,

};
PageHeaderComponent.defaultProps = {
  menuItems: [],
};

export default PageHeaderComponent;
