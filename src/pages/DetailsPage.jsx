import React, { PropTypes } from 'react';

const DetailsPage = ({ params }) => (
  <div>
    <h2>DetailsPage</h2>
    {params.make} | {params.model} | {params.id}
  </div>
);
DetailsPage.propTypes = {
  params: PropTypes.any,
};

export default DetailsPage;
