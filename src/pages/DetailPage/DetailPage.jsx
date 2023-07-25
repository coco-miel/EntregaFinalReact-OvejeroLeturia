import { useState, useEffect } from "react";
// dom
import { useParams } from "react-router-dom";
// components
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";
// firebase
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  //following firebase documentation in to how to retrieve the contents of a single document
  useEffect(() => {
    const getProduct = async () => {
      const docRef = doc(db, "clothes", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct({ ...docSnap.data(), id: docSnap.id });
      } else {
        console.log("No such document!");
      }
    };

    getProduct();
  }, [id]);

  return <div>{product && <ItemDetailContainer data={product} />}</div>;
};

export default DetailPage;
