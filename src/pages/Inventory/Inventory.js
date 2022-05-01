import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-center my-5">Please update your items: {id}</h2>
      <Container>
        <Row>
          <div className="col-md-6 mx-auto">
            <div>
              {/* <img src={} alt="" /> */}
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Product Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Supplier Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Price" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="text" placeholder="Product Description" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Quantity" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <button className="btn btn-success">Stock</button>{" "}
                  <button className="btn btn-warning">Delivered</button>
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
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Inventory;
