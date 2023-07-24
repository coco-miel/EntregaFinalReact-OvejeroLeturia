import React, { useContext } from "react";
import { Row, Col, Container, Button, Image } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import Table from "react-bootstrap/Table";
import "./Cart.css";
import Checkout from "../Checkout/Checkout";

const Cart = () => {
  const { cartList, itemsCart, totalCart, clearCart } = useContext(CartContext);

  const handleEmptyCart = () => {
    clearCart();
  };

  return (
    <>
      <Container className="w-75">
        <h1 className="text-center m-5">Cart details</h1>
        <Table size="sm">
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th>Sum</th>
            </tr>
          </thead>
          <tbody>
            {cartList.map((data) => (
              <tr key={data.id}>
                <td>{data.title}</td>
                <td>{data.quantity}</td>
                <td>${data.price}</td>
                <td>${data.price * data.quantity}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="grey-bg">
              <td className="fw-bold">TOTAL ITEMS:</td>
              <td className="fw-bold">{itemsCart()}</td>
              <td className="fw-bold">TOTAL PURCHASE:</td>
              <td className="fw-bold">${totalCart()}</td>
            </tr>
          </tfoot>
        </Table>
        <div className="mt-5 d-flex justify-content-evenly">
          <Button onClick={handleEmptyCart}>Clean cart</Button>
          <Checkout />
        </div>
      </Container>
    </>
  );
};

export default Cart;