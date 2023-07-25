// context
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
// css
import "./ItemCount.css";
// bootstrap
import Button from "react-bootstrap/Button";

const ItemCount = ({ stock, data }) => {
  const { cartList, addItem } = useContext(CartContext);
  console.log(cartList);

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddCart = () => {
    if (quantity <= stock) {
      addItem(data, quantity);
    } else {
      console.log("Cannot add more than available stock to the cart.");
    }
  };

  return (
    <>
      <div className="item-count-container">
        <Button
          variant="dark"
          size="sm"
          className=""
          disabled={stock === 0}
          onClick={handleDecrement}
        >
          -
        </Button>
        <p className="mx-3">{quantity}</p>
        <Button
          variant="dark"
          size="sm"
          disabled={stock === 0}
          onClick={handleIncrement}
        >
          +
        </Button>
      </div>
      <div className="mt-3">
        <Button
          variant="outline-secondary"
          disabled={stock === 0}
          onClick={handleAddCart}
        >
          Add to cart
        </Button>
      </div>
    </>
  );
};

export default ItemCount;
