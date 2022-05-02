import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button, Container, Form, Row } from "react-bootstrap";
import auth from "../../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleAddCar = (e) => {
    e.preventDefault();
    const carObj = {
      name: e.target.name.value,
      supplier: e.target.supplier.value,
      email: user.email,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
      description: e.target.description.value,
      img: e.target.image.value,
    };
    axios.post("http://localhost:5000/car", carObj).then((response) => {
      toast("success");
    });
    e.target.reset();
    // navigate("/my-items");
  };
  return (
    <div>
      <Container>
        <Row>
          <div className="col-md-6 mx-auto">
            <h2 className="my-5">Add A Car</h2>
            <Form onSubmit={handleAddCar}>
              <Form.Group className="mb-3" controlId="formBasicModel">
                <Form.Label>Model</Form.Label>
                <Form.Control type="text" name="name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicSupplier">
                <Form.Label>Supplier</Form.Label>
                <Form.Control type="text" name="supplier" />
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
                <Form.Control type="number" name="price" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicQuantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="number" name="quantity" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <br />
                <textarea className="w-100" name="description"></textarea>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" name="image" />
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
