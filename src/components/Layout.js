import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-slice";

const Layout = () => {
  const itemsList = useSelector(state => state.cart.itemsList)

  const total = itemsList.reduce((prev, item) => {
    return prev + item.price;
  },0);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
          <button className="orderBtn" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
