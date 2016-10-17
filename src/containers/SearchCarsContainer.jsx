import React from 'react';
import { SearchCarsFormComponent } from '../components';

const SearchPage = () => (
  <div>
    <h3>Search for Cars</h3>
    <SearchCarsFormComponent />
  </div>
);

export default SearchPage;
// function mapStateToProps({ search }) {
//   return {
//     filteredSites: search.get('filteredSites'),
//     keywords: search.get('keywords')
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(SearchActions, dispatch)
//   };
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SearchPage);
