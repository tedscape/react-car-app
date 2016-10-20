import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { CarDetailsComponent } from '../components';
import * as actions from '../actions';

class HomePage extends Component {
  componentDidMount() {
    const { id, fetchCarOfTheWeek } = this.props;
    if (!id) {
      fetchCarOfTheWeek();
    }
  }
  componentWillReceiveProps(nextProps) {
    const { id, fetchCarDetails } = this.props;
    if (id !== nextProps.id) {
      fetchCarDetails(nextProps.id);
    }
  }
  render() {
    const { review, model } = this.props;

    return (<div>
      <h4>Car of the Week</h4>
      {
        model
          ? (<CarDetailsComponent
            name={model.name}
            make={model.makeName}
            price={model.price}
            image={model.imageUrl}
            description={review}
          />)
          : null
      }
    </div>

    );
  }
}

HomePage.propTypes = {
  id: PropTypes.number,
  review: PropTypes.string,
  model: PropTypes.object,
  fetchCarOfTheWeek: PropTypes.func,
  fetchCarDetails: PropTypes.func,
};

const mapStateToProps = ({ carOfTheWeek }) => ({
  review: carOfTheWeek.get('review'),
  id: carOfTheWeek.get('id'),
  model: carOfTheWeek.get('carDetails'),
});

const mapDispatchToProps = dispatch => (
  {
    fetchCarOfTheWeek: () => dispatch(actions.getCarOfTheWeek()),
    fetchCarDetails: id => dispatch(actions.getCarOfTheWeekDetails(id)),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
