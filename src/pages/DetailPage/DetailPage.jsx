import { useState, useEffect } from "react";
// dom
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";

const DetailPage = () => {
  let { id } = useParams();
  const [product, setProduct] = useState({});
  // consuming API
  useEffect(() => {
    fetch(`${import.meta.env.VITE_APP_BASE_URL}${id}`)
      .then((response) => response.json())
      .then((product) => setProduct(product));
  }, [id]);
  return (
    <div>{product.id ? <ItemDetailContainer product={product} /> : null}</div>
  );
};

export default DetailPage;