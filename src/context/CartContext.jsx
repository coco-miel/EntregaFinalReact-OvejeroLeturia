import {  createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState(() => {
    return JSON.parse(localStorage.getItem(`cartList`)) || [];
  });

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }, [cartList]);

  const addItem = (data, quantity) => {
    const addedItem = { ...data, quantity };

    const newCart = [...cartList];
    const inCartIndex = newCart.findIndex((item) => item.id === addedItem.id);

    if (inCartIndex !== -1) {
      // item already in cart, update the quantity
      const totalQuantity = newCart[inCartIndex].quantity + quantity;
      if (totalQuantity <= data.stock) {
        newCart[inCartIndex].quantity = totalQuantity;
      }
    } else {
      // item not in cart, add it
      newCart.push(addedItem);
    }
    setCartList(newCart);
  };

  const itemsCart = () => {
    return cartList.reduce((prev, next) => prev + next.quantity, 0);
  };

  const clearCart = () => {
    setCartList([]);
  };

  const clearItem = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
  };

  const totalCart = () => {
    return cartList.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addItem,
        itemsCart,
        clearCart,
        totalCart,
        clearItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
