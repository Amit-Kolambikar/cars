import React from "react";
import {
    Navbar,
    Nav,
  } from "react-bootstrap";
  import { Link } from "react-router-dom";

const NavBar=()=> {
  return (
    <Navbar bg="#fff" expand="lg" className="navbar-custom">
      <Navbar.Brand as={Link} to="/">
        <img
          src={require("../../logo.png")}
          width="200"
          className="d-inline-block align-top"
          alt="auto1"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link href="#home">Purchase</Nav.Link>
        <Nav.Link href="#link">My Orders</Nav.Link>
        <Nav.Link href="#link">Sell</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBar;
