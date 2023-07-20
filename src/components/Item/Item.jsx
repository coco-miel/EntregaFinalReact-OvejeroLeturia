// css
import "./Item.css";
// boostrap
import {Card, Button} from "react-bootstrap";

const Item = ({ data }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={data.img} />
      <Card.Body className="text-center">
        <Card.Title className="overflow-wrap">{data.title}</Card.Title>
        <Button variant="dark">Details</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
