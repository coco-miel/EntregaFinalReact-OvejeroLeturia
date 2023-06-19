import { Link } from "react-router-dom";
// css & image
import "./NavBar.css";
import appLogo from "/assets/wave.png";
// bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// components
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/PreEntrega2-OvejeroLeturia/">
          <img
            src={appLogo}
            className="navbar-logo d-inline-block align-top"
            alt="Wave logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/PreEntrega2-OvejeroLeturia/">
              Home
            </Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                to="/PreEntrega2-OvejeroLeturia/category/men's clothing"
              >
                Men's clothing
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to="/PreEntrega2-OvejeroLeturia/category/women's clothing"
              >
                Women's clothing
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to="/PreEntrega2-OvejeroLeturia/category/electronics"
              >
                Electronics
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to="/PreEntrega2-OvejeroLeturia/category/jewelery"
              >
                Jewelery
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
