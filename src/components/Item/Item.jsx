// css
import "./Item.css";
// boostrap
import Card from "react-bootstrap/Card";

const Item = ({ product }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={product.image} />
      <Card.Body className="text-center">
        <Card.Title className="overflow-wrap">{product.title}</Card.Title>
        <Card.Text>Price: ${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Item;
