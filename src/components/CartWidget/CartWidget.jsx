// dom
import { Link } from "react-router-dom";
// context
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
// bootstrap
import { Badge, Nav } from "react-bootstrap";

const CartWidget = () => {
  const { itemsCart } = useContext(CartContext);
  return (
    <Nav>
      <Nav.Link as={Link} to="/cart">
        <i className="bi bi-cart-fill"></i> Cart{" "}
        <Badge bg="dark">{itemsCart()}</Badge>
      </Nav.Link>
    </Nav>
  );
};

export default CartWidget;
