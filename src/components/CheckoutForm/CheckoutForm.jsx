import { Form, Container, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const CheckoutForm = () => {
  //for the form
  const initialState = {
    name: "",
    lastName: "",
    phone: "",
    email: "",
  };
  
  const [values, setValues] = useState(initialState);
  const [orderId, setOrderId] = useState(""); // state variable to store the order id
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "purchaseOrder"), {
      name: values.name,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
    });
    setOrderId(docRef.id); // storing id
    setValues(initialState);
    setShow(true); //so it shows the modal
  };

  //for the modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <Container>
      <Form onSubmit={onSubmit}>
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Order placed successfully!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Your order ID is: {orderId}
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </Container>
  );
};

export default CheckoutForm;
