import React from "react";
import useCars from "../../../hooks/useCars";
import FeaturedCar from "../../FeaturedCar/FeaturedCar";
import "./FeaturedItems.css";

const FeaturedItems = () => {
  const [cars] = useCars();

  return (
    <div className="container">
      <div className="row">
        <h3 className="section-title text-center my-5 fw-bold">
          <span className="d-inline-block border-bottom border-danger border-2">
            FEATURED PRODUCTS
          </span>
        </h3>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {cars.slice(0, 6).map((car) => (
            <FeaturedCar car={car}></FeaturedCar>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;
