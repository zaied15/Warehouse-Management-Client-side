import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "./../../../images/logo.png";

const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="me-5">
            <img src={logo} width="170" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="#">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="#">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="#">
                Add Items
              </Nav.Link>
              <Nav.Link as={Link} to="#">
                Manage Items
              </Nav.Link>
            </Nav>
            <Nav>
              {user ? (
                <>
                  <button onClick={logout} className="btn btn-warning">
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="register">
                    Register
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
