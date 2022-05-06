import axios from "axios";
import React, { useEffect, useState } from "react";
import ManageInventory from "./ManageInventory/ManageInventory";
import "./ManageInventories.css";

const ManageInventories = () => {
  const [cars, setCars] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);

  useEffect(() => {
    fetch(
      `https://car-dealer-heroku-server.herokuapp.com?page=${page}&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, [page, size]);

  useEffect(() => {
    axios
      .get("https://car-dealer-heroku-server.herokuapp.com/carCount")
      .then((response) => {
        const count = response?.data?.count;
        const pages = Math.ceil(count / 5);
        setPageCount(pages);
      });
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete this item?");
    if (proceed) {
      const url = `https://car-dealer-heroku-server.herokuapp.com/carDelete/${id}`;
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
      <div className="text-center">
        <div>
          <p className="bg-secondary d-inline-block text-light p-2 rounded fw-bold">
            Select your page from below
          </p>
        </div>
        {[...Array(pageCount).keys()].map((number) => (
          <button
            key={number}
            className={`mx-1 btn-pagination ${
              page === number && "selected-page"
            }`}
            onClick={() => setPage(number)}
          >
            {number + 1}
          </button>
        ))}
        <span className="d-inline-block ms-3">
          <select onChange={(e) => setSize(e.target.value)}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </span>
      </div>
    </div>
  );
};

export default ManageInventories;
