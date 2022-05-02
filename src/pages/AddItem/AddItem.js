import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button, Container, Form, Row } from "react-bootstrap";
import auth from "../../firebase.init";
import axios from "axios";

const AddItem = () => {
  const [user] = useAuthState(auth);
  const refName = useRef("");
  const refSupplier = useRef("");
  const refPrice = useRef("");
  const refQuantity = useRef("");
  const refDescription = useRef("");
  const refImg = useRef("");

  const handleAddCar = (e) => {
    e.preventDefault();

    const carObj = {
      name: refName.current.value,
      supplier: refSupplier.current.value,
      email: user.email,
      price: refPrice.current.value,
      quantity: refQuantity.current.value,
      description: refDescription.current.value,
      img: refImg.current.value,
    };
    axios.post("", carObj).then((response) => {
      console.log(response);
    });
  };
  return (
    <div>
      <Container>
        <Row>
          <div className="col-md-6 mx-auto">
            <h2 className="my-5">Add A Car</h2>
            <Form onClick={handleAddCar}>
              <Form.Group className="mb-3" controlId="formBasicModel">
                <Form.Label>Model</Form.Label>
                <Form.Control type="text" ref={refName} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicSupplier">
                <Form.Label>Supplier</Form.Label>
                <Form.Control type="text" ref={refSupplier} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={user.email}
                  readOnly
                  disabled
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" ref={refPrice} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicQuantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="number" ref={refQuantity} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <br />
                <textarea className="w-100" ref={refDescription}></textarea>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" ref={refImg} />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 fw-bold">
                Add Car
              </Button>
            </Form>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default AddItem;
