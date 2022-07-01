import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
const Cart = () => {
  const itemsList = useSelector((state) => state.cart.itemsList);

  const quantity = itemsList.reduce((prev, item) => {
    return prev + item.quantity;
  }, 0);


  return (
    <div className="cartIcon">
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
