import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [terms, setTerms] = useState(false);
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="d-flex justify-content-center align-items-center height-control">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div className="mb-3">
              <h2>Please Register</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type={!showPass ? "password" : "text"}
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicConfirmPassword"
                >
                  <Form.Control
                    type={!showPass ? "password" : "text"}
                    placeholder="Confirm Password"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicShowPass">
                  <Form.Check
                    type="checkbox"
                    label="Show Password"
                    onClick={() => setShowPass(!showPass)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Accept all terms & condition"
                    onClick={() => setTerms(!terms)}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={!terms ? "true" : ""}
                >
                  Register
                </Button>
              </Form>
              Already have an account?{" "}
              <Link to="/login" className="btn btn-info">
                Login
              </Link>
            </div>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
