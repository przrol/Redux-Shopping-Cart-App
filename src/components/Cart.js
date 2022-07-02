import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";
const Cart = () => {
  // const itemsList = useSelector((state) => state.cart.itemsList);
  // const quantity = itemsList.reduce((prev, item) => {
  //   return prev + item.quantity;
  // }, 0);

  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const handleCartClick = () => {
    dispatch(cartActions.setShowCart())
  }

  return (
    <div className="cartIcon">
      <h3 onClick={handleCartClick}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
