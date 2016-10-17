import React from 'react';
import { Link } from 'react-router';
import { CarDetailsComponent } from '../components';

const desc = 'The Mazda MX-5 is a traditional two-seat sports car, with a lightweight body and rear-wheel drive. It has a folding, fabric roof and is among the least expensive convertibles. This fourth-generation MX-5 is fantastic fun to drive. Motoring magazine Wheels named it Car of the Year for 2016.';

const HomePage = () => (
  <div>
    <h3>Car of the Week</h3>
    <CarDetailsComponent
      name="i30"
      id="30"
      make="Hyundai"
      price="AUD 21,000"
      image="http://files3.porsche.com/filestore/image/multimedia/none/rd-2013-9pa-e2-2nd-gts-modelimage-sideshot/model/c287d350-5920-11e4-99aa-001a64c55f5c;s25/porsche-model.png"
      description={desc}
    />
    <Link to="/Hyundai/i30/30">GO NOW</Link>
  </div>
);

export default HomePage;
