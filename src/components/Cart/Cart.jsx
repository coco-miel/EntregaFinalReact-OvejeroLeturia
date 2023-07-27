// context
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
// dom
import { Link } from "react-router-dom";
// css
import "./Cart.css";
// bootstrap
import { Table, Container, Button } from "react-bootstrap";
// component
import Checkout from "../Checkout/Checkout";

const Cart = () => {
  const { cartList, itemsCart, totalCart, clearCart, clearItem } = useContext(CartContext);

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
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartList.map((data) => (
              <tr key={data.id}>
                <td>{data.title}</td>
                <td>{data.quantity}</td>
                <td>${data.price}</td>
                <td>${data.price * data.quantity}</td>
                <td className="bi bi-trash-fill align-middle fs-4"  onClick={() => clearItem(data.id)}> </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="grey-bg">
              <td className="fw-bold">TOTAL ITEMS:</td>
              <td className="fw-bold">{itemsCart()}</td>
              <td className="fw-bold">TOTAL PURCHASE:</td>
              <td className="fw-bold">${totalCart()}</td>
              <td></td>
            </tr>
          </tfoot>
        </Table>
        <div className="mt-5 d-flex justify-content-around">
          <Button variant="danger" onClick={handleEmptyCart}>Clean cart</Button>
          <Checkout />
          <Link to={`/`}>
            <Button variant="primary">Continue Shopping</Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Cart;
