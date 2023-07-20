import { Link } from "react-router-dom";
// bootstrap
import { Badge, Nav } from "react-bootstrap";

const CartWidget = () => {
  return (
    <Nav>
      <Nav.Link as={Link} to="/cart/">
        <i className="bi bi-cart-fill"></i> Cart <Badge bg="dark">0</Badge>
      </Nav.Link>
    </Nav>
  );
};

export default CartWidget;
