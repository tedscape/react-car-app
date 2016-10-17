import React, { PropTypes } from 'react';
import { Panel } from 'react-bootstrap';
import numeral from 'numeral';

const getTitle = link => (
  <h2>{link}</h2>
);
const CarDetails = ({
  name,
  id,
  make,
  price,
  image,
  description,
}) =>
(
  <Panel header={getTitle(`${make} ${name} (${id})`)}>
    <div className="model-details">
      <img src={image} alt="car-pic" className="img-responsive" />
      <div className="details">
        <div className="description">{description}</div>
        <h4 className="price">AUD {numeral(price).format('0,0.00')}</h4>
      </div>
    </div>
  </Panel>
);
CarDetails.propTypes = {
  name: PropTypes.string,
  make: PropTypes.string,
  id: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};

export default CarDetails;
