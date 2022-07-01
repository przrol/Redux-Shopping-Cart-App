import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // console.log("handleAddToCart");
    dispatch(cartActions.addToCart({ name, id, imgURL, price }));
  };

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
