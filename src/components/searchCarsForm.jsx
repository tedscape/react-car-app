import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

const defaultPlaceholderText = '---Select an option---';

const renderSelectControl = (name, id, label, placeholder, disabled = false, options = []) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <Field name={name} id={id} component="select" className="form-control" disabled={disabled}>
      <option>{placeholder}</option>
      {
        options && options.map((item, index) => (
          <option value={item.id} key={index}>item.name</option>
        ))
    }
    </Field>
  </div>
);

const SearchCarsForm = (props) => {
  const {
      handleSubmit,
      makeList,
      modelList,
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
            makeList
          )
      }
      {
          renderSelectControl(
            'carModel',
            'carModel',
            'Select model',
            defaultPlaceholderText,
            !modelList || modelList.length === 0,
            modelList
          )
      }
      <button
        type="submit"
        disabled={!modelList || modelList.length === 0}
        className="btn btn-primary"
      >
        Get Car Details
      </button>
    </form>
    );
};

SearchCarsForm.propTypes = {
  handleSubmit: PropTypes.func,
  makeList: PropTypes.array,
  modelList: PropTypes.array,
};
export default reduxForm({
  form: 'searchCars',
})(SearchCarsForm);
