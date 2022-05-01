import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";

const AddItem = () => {
  return (
    <div>
      <Container>
        <Row>
          <div className="col-md-6 mx-auto">
            <h2 className="my-5">Add A Car</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Model:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Supplier:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Price:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description:</Form.Label>
                <br />
                <textarea className="w-100"></textarea>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" />
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
