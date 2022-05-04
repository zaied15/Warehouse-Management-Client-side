import React from "react";
import { Button, Form } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="d-flex justify-content-center align-items-center height-control">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <h2 className="mb-3">Please contact for any queries</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicSubject">
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicMessage">
                <textarea
                  name=""
                  id=""
                  rows="10"
                  className="w-100"
                  placeholder="Your Message"
                  style={{ resize: "none" }}
                ></textarea>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
