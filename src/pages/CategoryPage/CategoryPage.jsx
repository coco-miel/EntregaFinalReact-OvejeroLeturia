import { useState, useEffect } from "react";
// dom
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// bootstrap
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { collection, query, where, getDocs, documentId } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import Item from "../../components/Item/Item";

const CategoryPage = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    console.log(categoryId);
    useEffect(() => {
      const getProducts = async () => {
        const q = query(collection(db, "clothes"), where("category", "==", categoryId));
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) =>{
          docs.push({ ...doc.data(), id: doc.id})
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
