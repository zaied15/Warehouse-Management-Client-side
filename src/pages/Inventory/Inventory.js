import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const [newQuantity, setNewQuantity] = useState(0);
  const refQuantity = useRef("");

  useEffect(() => {
    const url = `http://localhost:5000/car/${id}`;
    axios.post(url).then((response) => {
      setCar(response.data);
    });
  }, [id]);

  const handleDeliver = (e) => {
    e.preventDefault();
    const quantity = refQuantity.current.value;
    if (quantity > 1) {
      setNewQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <div className="mx-auto">
            <Row>
              <div className="col-md-5">
                <h2 className="text-center my-5">
                  Please update your items: {car.name}
                </h2>
                {/* <img src={} alt="" /> */}
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Model:</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={car.name}
                      readOnly
                      disabled
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Supplier:</Form.Label>
                    <Form.Control
                      type="text"
                      value={car.supplier}
                      readOnly
                      disabled
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control
                      type="text"
                      value={car.price}
                      readOnly
                      disabled
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description:</Form.Label>
                    <br />
                    <textarea
                      className="w-100"
                      value={car.description}
                      readOnly
                      disabled
                    ></textarea>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                      ref={refQuantity}
                      type="text"
                      value={newQuantity ? newQuantity : car.quantity}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Sold</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <button onClick={handleDeliver} className="btn btn-warning">
                      Delivered
                    </button>
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 fw-bold"
                  >
                    Update
                  </Button>
                </Form>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-5">
                <h2 className="text-center my-5">Re-stock your items</h2>
                {/* <img src={} alt="" /> */}
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Stock
                  </Button>
                </Form>
                <div className="d-flex justify-content-center align-items-center">
                  <Link className="btn btn-danger" to="/manageInventories">
                    Manage Inventories
                  </Link>
                </div>
              </div>
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Inventory;
