import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Form, Button, Modal } from "react-bootstrap";
import { collection, addDoc, updateDoc, doc, getDoc  } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

function Checkout() {

    const initialState = {
        name: "",
        lastName: "",
        phone: "",
        email: "",
        };

  //for the form
  const { clearCart, cartList } = useContext(CartContext);
  const [values, setValues] = useState(initialState);
  const [orderId, setOrderId] = useState(""); // state variable to store the order id
  const [formSubmitted, setFormSubmitted] = useState(false); // state variable to track form submission status



  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };


    const cartItemsData = cartList.map((item) => ({
    title: item.title,
    quantity: item.quantity,
    price: item.price,
    }));

    const clientData = {
        name: values.name,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
      };

  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "purchaseOrder"), {
        client: clientData,
        cartItems: cartItemsData,
      });
    
      // Update the stock for each product in the cart
      cartList.forEach(async (item) => {
        const productId = item.id;
        const productRef = doc(db, "clothes", productId); 
    
        for (const item of cartList) {
            const itemId = item.id;
            const itemDocRef = doc(db, "clothes", itemId);
      
            // Fetch the current stock value from the "clothes" document
            const itemDocSnap = await getDoc(itemDocRef);
            const currentStock = itemDocSnap.data().stock;
      
            // Calculate the new stock value after deducting the quantity ordered
            const newStock = currentStock - item.quantity;
      
            // Update the "stock" field in the "clothes" document
            await updateDoc(itemDocRef, { stock: newStock });
          }
      });
    
      setOrderId(docRef.id);
      setValues(initialState);
      setFormSubmitted(true);
    };

  //for the modal

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setFormSubmitted(false);
    clearCart();
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Finish purchase
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static" 
        keyboard={false} // Prevent closing with the escape key
      >
        <Form onSubmit={onSubmit}>
          <Modal.Header>
            <Modal.Title>Checkout form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={values.name}
                onChange={handleOnChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lastName"
                value={values.lastName}
                onChange={handleOnChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={values.email}
                onChange={handleOnChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTel">
              <Form.Control
                type="number"
                placeholder="Phone"
                name="phone"
                value={values.phone}
                onChange={handleOnChange}
                required
              />
            </Form.Group>
            {formSubmitted && <p>Your order ID is: {orderId}</p>}
          </Modal.Body>
          <Modal.Footer>
            {formSubmitted && (
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            )}
            {!formSubmitted && ( // Show the submit button only when the form is not submitted
              <Button variant="primary" type="submit">
                Submit
              </Button>
            )}
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default Checkout;
