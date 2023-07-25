import { useState, useEffect } from "react";
// dom
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// components
import Item from "../../components/Item/Item";
// firebase
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
// bootstrap
import { Container, Col, Row } from "react-bootstrap";

const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    const getProducts = async () => {
      const q = query(
        collection(db, "clothes"),
        where("category", "==", categoryId)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProducts(docs);
    };
    getProducts();
  }, [categoryId]);
  return (
    <Container>
      <Row>
        {products.map((product) => {
          return (
            <Col className="my-4" md={3} key={product.id}>
              <Link to={`/detail/${product.id}`}>
                <Item data={product} />
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CategoryPage;
