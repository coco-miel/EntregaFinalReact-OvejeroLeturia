import { useState, useEffect } from "react";
//dom
import { Link } from "react-router-dom";
// components
import Item from "../Item/Item";
// firebase
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
// bootstrap
import { Row, Col, Container } from "react-bootstrap";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  // using firebase
  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "clothes"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProducts(docs);
    };
    getProducts();
  }, []);
  return (
    <Container>
      <Row>
        {products.map((product) => {
          return (
            <Col className="my-4" md={3} key={product.id}>
              <Link to={`detail/${product.id}`}>
                <Item data={product} />
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ItemListContainer;
