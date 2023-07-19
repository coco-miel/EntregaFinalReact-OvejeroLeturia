// css
import "./Item.css";
// boostrap
import Card from "react-bootstrap/Card";

const Item = ({ data }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={data.img} />
      <Card.Body className="text-center">
        <Card.Title className="overflow-wrap">{data.title}</Card.Title>
        <Card.Text>Price: ${data.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Item;
