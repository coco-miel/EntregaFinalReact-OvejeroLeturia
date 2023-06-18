import { useState, useEffect } from "react";
// bootstrap
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// components
import CardProduct from "../CardProduct/CardProduct";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
// consuming API
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}`)
      .then((response) => response.json())
      .then((product) => setProducts(product));
  }, []);
  return (
    <Container>
      <Row>
        {products.map((product) => {
          return (
            <Col className="my-5" md={3} key={product.id}>
              <CardProduct product={product} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ItemListContainer;
