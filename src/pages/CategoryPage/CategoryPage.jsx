import { useState, useEffect } from "react";
// dom
import { useParams } from "react-router-dom";
// bootstrap
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Item from "../../components/Item/Item";

const CategoryPage = () => {
    const [products, setProducts] = useState([]);
    let { categoryId } = useParams();

    let filteredProducts = products.filter((product) =>{
        return product.category === categoryId;
    })
    // consuming API
    useEffect(() => {
        fetch(`${import.meta.env.VITE_APP_BASE_URL}`)
        .then((response) => response.json())
        .then((product) => setProducts(product));
    }, []);
    return (
        <Container>
          <Row>
            {filteredProducts.map((product) => {
              return (
                <Col className="my-4" md={3} key={product.id}>
                    <Item product={product} />
                </Col>
              );
            })}
          </Row>
        </Container>
      );
    };

export default CategoryPage;
