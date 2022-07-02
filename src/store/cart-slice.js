import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      //to check if item is already available
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      state.totalQuantity++;
    },
    removeFromCart(state, action) {
      const removeItemId = action.payload;

      const existingItem = state.itemsList.find(
        (item) => item.id === removeItemId
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        } else {
          state.itemsList = state.itemsList.filter(
            (item) => item.id !== removeItemId
          );
        }

        state.totalQuantity--;
      }
    },

    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const sendCartData = (cart) => {
  return async(dispatch) => {
    dispatch(
      uiActions.showNotification({
        type: "warning",
        message: "Sending request to firebase",
        isOpen: true,
      })
    );
    const sendRequest = async () => {
      // Send state as Sending request

      const res = await fetch(
        "https://redux-http-30f5a-default-rtdb.europe-west1.firebasedatabase.app/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      // data
      await res.json();
      
      // Send state as Request is successful
      dispatch(
        uiActions.showNotification({
          type: "success",
          message: "Sending request successful",
          isOpen: true,
        })
      );
    };
    try {
      await sendRequest()
    } catch (err) {
      // Send state as Request is unsuccessful
      console.log(err)
      dispatch(
        uiActions.showNotification({
          type: "error",
          message: "Sending request failed",
          isOpen: true,
        })
      );
    }
  }
}

export const cartActions = cartSlice.actions;

export default cartSlice;
