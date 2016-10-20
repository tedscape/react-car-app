import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { CarDetailsComponent } from '../components';
import * as actions from '../actions';

const renderDetailsComponent = model => (
  <div>
    <h4>Details page</h4>
    <CarDetailsComponent
      name={model.name}
      make={model.makeName}
      price={model.price}
      image={model.imageUrl}
    />
  </div>
);
class CarDetailsContainer extends Component {
  componentDidMount() {
    const { fetchCarDetails, model, params } = this.props;
    if (!(model && model.modelId)) {
      fetchCarDetails(params.id);
    }
  }

  render() {
    const { model } = this.props;
    return (
      <div>
        {
         model && model.name
            ? renderDetailsComponent(model)
            : <span>Car not found. Please try again later</span>
        }
      </div>
    );
  }
}

CarDetailsContainer.propTypes = {
  model: PropTypes.object,
  fetchCarDetails: PropTypes.func,
  params: PropTypes.object,
};

const mapStateToProps = ({ selectedModel }) => ({
  model: selectedModel.get('carDetails'),
});


const mapDispatchToProps = dispatch => (
  {
    fetchCarDetails: id => dispatch(actions.getModel(id)),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarDetailsContainer);
