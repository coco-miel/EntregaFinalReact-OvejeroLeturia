import { useState , useEffect} from "react";
import CardProduct from "../CardProduct/CardProduct";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((product) => setProducts(product));
  }, []);
  return (
    <Container>
      <Row>
        {products.map((product) => {
          return (
            <Col className="my-5" md={3} key={product.id}>
              <CardProduct  product={product} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};



export default ItemListContainer;