// bootstrap
import { Badge, Nav } from "react-bootstrap";

const CartWidget = () => {
  return (
    <Nav>
      <Nav.Link href="#cart">
        <i className="bi bi-cart-fill"></i> Cart <Badge bg="dark">0</Badge>
      </Nav.Link>
    </Nav>
  );
};

export default CartWidget;
