// dom
import { Link } from "react-router-dom";
// components
import CartWidget from "../CartWidget/CartWidget";
// css & image
import "./NavBar.css";
import appLogo from "../../assets/wave.png";
// bootstrap
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={appLogo}
            className="navbar-logo d-inline-block align-top"
            alt="Wave logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/category/tshirts">
                T-shirts
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/category/hoodies">
                Hoodies
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/category/jeans">
                Jeans
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
