import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyCar from "./MyCar/MyCar";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myCars, setMyCars] = useState([]);

  useEffect(() => {
    const url = `https://car-dealer-heroku-server.herokuapp.com/myCar?email=${user?.email}`;
    axios
      .get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        setMyCars(response.data);
      });
  }, [user?.email]);

  const deleteMyItem = (id) => {
    const proceed = window.confirm("Are You sure to DELETE?");
    if (proceed) {
      const url = `https://car-dealer-heroku-server.herokuapp.com/carDelete/${id}`;
      axios.post(url).then((response) => {
        if (response.data.deletedCount > 0) {
          const remaining = myCars.filter((myCar) => myCar._id !== id);
          setMyCars(remaining);
        }
      });
    } else {
      return;
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="mb-5">
          <h3 className="section-title text-center my-5 fw-bold">
            <span className="d-inline-block border-bottom border-danger border-2">
              MY CAR COLLECTION
            </span>
          </h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {myCars.map((myCar) => (
              <MyCar key={myCar._id} myCar={myCar}>
                <button
                  className="btn btn-danger w-50"
                  onClick={() => deleteMyItem(myCar._id)}
                >
                  Delete
                </button>
              </MyCar>
            ))}
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default MyItems;
