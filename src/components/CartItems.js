import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map(({ name, quantity, totalPrice, price, id }) => (
          <li key={id}>
            <CartItem
              name={name}
              quantity={quantity}
              total={totalPrice}
              id={id}
              price={price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
