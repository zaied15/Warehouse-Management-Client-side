import React from "react";
import { Button, Form } from "react-bootstrap";

const Register = () => {
  return (
    <div className="d-flex justify-content-center align-items-center height-control">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div>
              <h2>Please Register</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicConfirmPassword"
                >
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Accept all terms & condition"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Register
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
