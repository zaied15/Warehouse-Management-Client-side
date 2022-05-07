import React from "react";
import { useNavigate } from "react-router-dom";

const MyCar = ({ myCar, children }) => {
  const navigate = useNavigate();
  const handleInventory = () => {
    navigate(`/inventory/${myCar._id}`);
    localStorage.setItem(myCar._id, myCar.quantity);
    localStorage.setItem(`sold${myCar._id}`, parseInt(myCar.sold));
  };
  return (
    <div className="col">
      <div className="card h-100 border-bottom-0">
        <div className="position-relative">
          <img
            src={myCar.img}
            height="290px"
            className="card-img-top"
            alt={myCar.name}
          />
          <span className="position-absolute d-inline-block bottom-0 end-0 price">
            Price: ${myCar.price}
          </span>
        </div>
        <div className="card-body">
          <h5 className="card-title fw-bold text-danger text-center mb-4">
            {myCar.name}
          </h5>
          <div className="d-flex justify-content-between">
            <h6 className="card-title bg-success p-2 rounded text-light">
              Supplier: {myCar.supplier}
            </h6>
            <h6 className="card-title bg-success p-2 rounded text-light">
              Quantity: {myCar.quantity}
            </h6>
          </div>
          <p className="card-text mt-3">{myCar.description}</p>
        </div>
        <div className="card-footer border-0 p-0">
          <button onClick={handleInventory} className="w-50 btn btn-secondary">
            Update Car
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MyCar;
