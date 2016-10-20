import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

const defaultPlaceholderText = '---Select an option---';

const renderSelectControl = (name, id, label, placeholder, disabled = false, options = []) => (
  <div className="form-group col-xs-12 col-sm-6">
    <label htmlFor={id}>{label}</label>
    <Field
      name={name}
      id={id}
      component="select"
      className="form-control"
      disabled={disabled}
    >
      <option value="">{placeholder}</option>
      {
        options && options.map((item, index) => (
          <option value={item.id} key={index}>{item.name}</option>
        ))
      }
    </Field>
  </div>
);

const SearchCarsForm = (props) => {
  const {
    handleSubmit,
    listOfMakes,
    listOfModels,
    selectedMakeId,
    selectedModelId,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      {
        renderSelectControl(
          'carMake',
          'carMake',
          'Select make',
          defaultPlaceholderText,
          false,
          listOfMakes
        )
      }
      {
        renderSelectControl(
          'carModel',
          'carModel',
          'Select model',
          defaultPlaceholderText,
          (listOfModels.length === 0 || selectedMakeId === undefined),
          listOfModels
        )
      }
      <div className="col-xs-12 col-sm-6 float-sm-right py-2">
        <button
          type="submit"
          disabled={(listOfModels.length === 0 || selectedModelId === undefined)}
          className="btn btn-primary btn-block"
        >
          Get Car Details
        </button>
      </div>
    </form>
  );
};

SearchCarsForm.propTypes = {
  handleSubmit: PropTypes.func,
  listOfMakes: PropTypes.array,
  listOfModels: PropTypes.array,
  selectedMakeId: PropTypes.string,
  selectedModelId: PropTypes.string,
};
export default reduxForm({
  form: 'searchCars',
})(SearchCarsForm);
