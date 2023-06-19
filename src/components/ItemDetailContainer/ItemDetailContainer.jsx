import "./ItemDetailContainer.css";
// bootstrap
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ItemDetailContainer = ({ product }) => {
  return (
    <Container className="p-5">
      <Row className="">
        <Col md={4} className="card-img-container">
          <Image className="detail-img mb-3" src={product.image} rounded />
        </Col>
        <Col md={8}>
          <h1 className="mb-3">{product.title}</h1>
          <div className="fs-5 mb-3">
            <span>Price: ${product.price}</span>
          </div>
          <p className="lead">{product.description}</p>
          <div className="d-flex">
            <Button variant="outline-secondary">Add to cart</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetailContainer;
