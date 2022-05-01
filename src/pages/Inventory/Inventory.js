import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();

  return (
    <div>
      <Container>
        <Row>
          <div className="mx-auto">
            <Row>
              <div className="col-md-5">
                <h2 className="text-center my-5">
                  Please update your items: {id}
                </h2>
                {/* <img src={} alt="" /> */}
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
                    <Form.Label>Sold</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
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
              <div className="col-md-2"></div>
              <div className="col-md-5">
                <h2 className="text-center my-5">Re-stock your items: {id}</h2>
                {/* <img src={} alt="" /> */}
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Update
                  </Button>
                </Form>
              </div>
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Inventory;
