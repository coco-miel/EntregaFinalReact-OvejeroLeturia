import React from "react";
import appLogo from "/wave.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#">
          <img
            src={appLogo}
            className="navbar-logo d-inline-block align-top"
            alt="Wave logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <NavDropdown title="Catalogo" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Buzos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Jeans</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
