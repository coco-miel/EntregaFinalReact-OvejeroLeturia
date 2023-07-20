import "./ItemDetailContainer.css";
// bootstrap
import { Row, Col, Container, Button, Image } from "react-bootstrap";

const ItemDetailContainer = ({ data }) => {
  return (
    <Container className="p-5">
      <Row className="">
        <Col md={4} className="card-img-container">
          <Image className="detail-img mb-3" src={data.img} rounded />
        </Col>
        <Col md={8}>
          <h1 className="mb-3">{data.title}</h1>
          <div className="fs-5 mb-3">
             <span>Price: ${data.price} </span>
          </div>
          <p className="lead">{data.description}</p>
          <div className="d-flex">
            <Button variant="outline-secondary">Add to cart</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetailContainer;
