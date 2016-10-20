import React, { PropTypes } from 'react';
import getFormattedPrice from '../utils/getFormattedPrice';

const CarDetails = ({
  name,
  make,
  price,
  image,
  description,
}) =>
(<div className="card">
  <img src={image} className="img-fluid w-100" alt="Car details" />
  <div className="card-block">
    <h5 className="card-title">{`${make} ${name}`}</h5>
    <p className="card-text">{description}</p>
    <h6 className="card-subtitle">{getFormattedPrice(price)}</h6>
  </div>
</div>
);
CarDetails.propTypes = {
  name: PropTypes.string,
  make: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  description: PropTypes.string,
};

export default CarDetails;
