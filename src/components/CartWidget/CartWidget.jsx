import React from "react";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";

const CartWidget = () => {
  return (
    <Nav>
      <Nav.Link href="#cart">
        <i className="bi bi-cart-fill"></i> Carrito <Badge bg="dark">0</Badge>
      </Nav.Link>
    </Nav>
  );
};

export default CartWidget;
