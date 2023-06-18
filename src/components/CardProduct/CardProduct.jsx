import React from "react";
// css
import "./CardProduct.css";
// boostrap
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CardProduct = ({ product }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={product.image} />
      <Card.Body className="text-center">
          <Card.Title className="overflow-wrap">{product.title}</Card.Title>
          <Card.Text>Precio: ${product.price}</Card.Text>
          <div>
            <Button variant="primary" size="sm">
              Add to cart
            </Button>{' '}
            <Button variant="secondary" size="sm">
              See details
            </Button>
          </div>
      </Card.Body>
    </Card>
  );
};

export default CardProduct;
