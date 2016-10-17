import React, { PropTypes } from 'react';
import { CarDetailsComponent } from '../components';

const DetailsPage = ({ params }) => (
  <div>
    <h2>More details- {params.make} | {params.model} | {params.id}</h2>
    <CarDetailsComponent
      name="i30"
      id="30"
      make="Hyundai"
      price="AUD 21,000"
      image="http://files3.porsche.com/filestore/image/multimedia/none/rd-2013-9pa-e2-2nd-gts-modelimage-sideshot/model/c287d350-5920-11e4-99aa-001a64c55f5c;s25/porsche-model.png"
    />
  </div>
);

DetailsPage.propTypes = {
  params: PropTypes.any,
};

export default DetailsPage;
