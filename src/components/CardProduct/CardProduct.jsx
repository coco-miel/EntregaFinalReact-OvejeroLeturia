import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./CardProduct.css"

const CardProduct = ({ product }) => {
  return (
      <Card className="h-100">
        <Card.Img className='card-img' variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <div className="text-center m-auto">
            <Button variant="primary">Ver detalles</Button>
          </div>
        </Card.Body>
      </Card>
  );
}


export default CardProduct;