import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { browserHistory } from 'react-router';
import { SearchCarsFormComponent } from '../components';
import * as actions from '../actions';

class SearchCarsContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleSubmitDetails = this.handleSubmitDetails.bind(this);
  }

  componentDidMount() {
    const { listOfMakes, getListOfMakes } = this.props;
    if (listOfMakes.length === 0) {
      getListOfMakes();
    }
  }
  componentWillReceiveProps(nextProps) {
    const { selectedMakeId, getModelList } = this.props;
    if (selectedMakeId !== nextProps.selectedMakeId) {
      getModelList(nextProps.selectedMakeId);
    }
  }
  handleSubmitDetails(event) {
    const selectedModelId = this.props.selectedModelId;
    event.preventDefault();
    browserHistory.push(`/make/model/${selectedModelId}`);
    this.props.clearSearch();
  }
  render() {
    const { listOfMakes, listOfModels, selectedMakeId, selectedModelId } = this.props;
    return (<div>
      <h4>Search for Cars</h4>
      <SearchCarsFormComponent
        listOfMakes={listOfMakes}
        listOfModels={listOfModels}
        selectedMakeId={selectedMakeId}
        selectedModelId={selectedModelId}
        handleSubmit={this.handleSubmitDetails}
      />
    </div>);
  }
}

SearchCarsContainer.propTypes = {
  listOfMakes: PropTypes.array,
  listOfModels: PropTypes.array,
  getListOfMakes: PropTypes.func,
  getModelList: PropTypes.func,
  clearSearch: PropTypes.func,
  selectedMakeId: PropTypes.string,
  selectedModelId: PropTypes.string,
};

const mapStateToProps = (state) => {
  const { searchPage } = state;
  const selector = formValueSelector('searchCars');
  const selectedMakeId = selector(state, 'carMake');
  const selectedModelId = selector(state, 'carModel');
  return {
    selectedMakeId,
    selectedModelId,
    listOfMakes: searchPage.get('listOfMakes'),
    listOfModels: searchPage.get('listOfModels'),
  };
};

const mapDispatchToProps = dispatch => (
  {
    getListOfMakes: () => dispatch(actions.getAllMakes()),
    getModelList: makeId => dispatch(actions.getModels(makeId)),
    clearSearch: () => dispatch(actions.clearSearch()),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchCarsContainer);
