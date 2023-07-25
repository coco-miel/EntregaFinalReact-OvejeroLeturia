// css
import "./ItemDetailContainer.css";
// components
import ItemCount from "../ItemCount/ItemCount";
// bootstrap
import { Row, Col, Container, Image } from "react-bootstrap";

const ItemDetailContainer = ({ data }) => {
  return (
    <Container className="p-5">
      <Row>
        <Col md={4} className="card-img-container">
          <Image className="detail-img mb-3" src={data.img} rounded />
        </Col>
        <Col md={8}>
          <h1 className="mb-3">{data.title}</h1>
          <div className="fs-5 mb-3">
            <span>
              Price: ${data.price} | Stock: {data.stock}{" "}
            </span>
          </div>
          <p className="lead">{data.description}</p>
          <div className="mb-3">
            <ItemCount stock={data.stock} data={data} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetailContainer;
