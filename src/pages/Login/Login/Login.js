import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="d-flex justify-content-center align-items-center height-control">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div>
              <h2>Login into your Account</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type={!showPass ? "password" : "text"}
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Show Password"
                    onClick={() => setShowPass(!showPass)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="px-5">
                  Login
                </Button>
              </Form>
              <p>
                Forgot Your Password?{" "}
                <button className="btn btn-info">Reset Password</button>
              </p>
              <p>
                Are you new to Car Dealer?{" "}
                <Link to="/register" className="btn btn-secondary">
                  Register
                </Link>
              </p>
            </div>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
