import axios from "axios";
import React, { useEffect, useState } from "react";
import ManageInventory from "./ManageInventory/ManageInventory";

const ManageInventories = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete this item?");
    if (proceed) {
      const url = `http://localhost:5000/carDelete/${id}`;
      axios.post(url).then((response) => {
        if (response.data.deletedCount > 0) {
          const remaining = cars.filter((car) => car._id !== id);
          setCars(remaining);
        }
      });
    }
  };

  return (
    <div>
      <h2 className="text-center my-5">Manage Your inventory</h2>
      <div className="d-flex flex-column">
        {cars.map((car) => (
          <ManageInventory key={car._id} car={car}>
            <button
              onClick={() => handleDelete(car._id)}
              className="btn btn-danger"
            >
              X
            </button>
          </ManageInventory>
        ))}
      </div>
    </div>
  );
};

export default ManageInventories;
