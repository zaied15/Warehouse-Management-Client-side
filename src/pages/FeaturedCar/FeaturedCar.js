import React from "react";
import { Card } from "react-bootstrap";

const FeaturedCar = ({ car }) => {
  return (
    <div class="col">
      <div class="card h-100">
        <div className="position-relative">
          <img
            src={car.img}
            height="290px"
            class="card-img-top"
            alt={car.name}
          />
          <span className="position-absolute d-inline-block bottom-0 end-0 price">
            Price: {car.price}
          </span>
        </div>
        <div class="card-body">
          <h5 class="card-title">Model: {car.name}</h5>
          <h6 class="card-title">Price: {car.price}</h6>
          <p class="card-text">{car.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCar;
