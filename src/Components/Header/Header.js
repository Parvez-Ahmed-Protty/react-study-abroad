import React from "react";
import {
  Container,
  Form,
  FormControl,
  Image,
  Nav,
  Navbar
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <Image className="logo" src="./logo.png" fluid />
          <small className="ms-2 fw-bold">Study Abroad</small>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 me-3"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              className="text-white me-3 text-decoration-none"
              to="/home"
              activeStyle={activeStyle}
            >
              Home
            </NavLink>
            <NavLink
              className="text-white me-3 text-decoration-none"
              activeStyle={activeStyle}
              to="/study"
            >
              Study
            </NavLink>
            <NavLink
              className="text-white me-3 text-decoration-none"
              activeStyle={activeStyle}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className="text-white me-3 text-decoration-none"
              activeStyle={activeStyle}
              to="/contact"
            >
              Contact Us
            </NavLink>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
