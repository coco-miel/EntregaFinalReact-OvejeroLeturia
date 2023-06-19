import { useState, useEffect } from "react";
//dom
import { Link } from "react-router-dom";
// bootstrap
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// components
import Item from "../Item/Item";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  // consuming API
  useEffect(() => {
    fetch(`${import.meta.env.VITE_APP_BASE_URL}`)
      .then((response) => response.json())
      .then((product) => setProducts(product));
  }, []);
  return (
    <Container>
      <Row>
        {products.map((product) => {
          return (
            <Col className="my-4" md={3} key={product.id}>
              <Link to={`item/${product.id}`}>
                <Item product={product} />
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ItemListContainer;
