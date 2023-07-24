
import Cart from "../../components/Cart/Cart";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
const CartPage = () => {
  const { cartList } = useContext(CartContext);
  return (
    <>
  { cartList.length > 0 ?
    <>    
            <Cart />
    </> :
      <h1 className="text-center m-5">Your shopping cart is currently empty...</h1>
  }  
  </>
    
  );
};

export default CartPage;
