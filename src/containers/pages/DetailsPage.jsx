import React, { PropTypes } from 'react';

const DetailsPage = ({ children }) => (
  <div>
    <h2>DetailsPage</h2>
    {children}
  </div>
);
DetailsPage.propTypes = {
  children: PropTypes.any,
};

export default DetailsPage;
