import React, { PropTypes } from 'react';

const SearchPage = ({ params }) => (
  <div>
    <h2>SearchPage - {params.id}</h2>

  </div>
);

SearchPage.propTypes = {
  params: PropTypes.any,
};

export default SearchPage;
