import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        "https://redux-http-30f5a-default-rtdb.europe-west1.firebasedatabase.app/cartItems.json"
      );
      const data = await res.json();
      return data;
    };

    try {
      const cartData = await fetchHandler();
      dispatch(cartActions.replaceData(cartData));
    } catch (err) {
      // Send state as Request is unsuccessful
      console.log(err);
      dispatch(
        uiActions.showNotification({
          type: "error",
          message: "fetch data failed",
          isOpen: true,
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
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
      await sendRequest();
    } catch (err) {
      // Send state as Request is unsuccessful
      console.log(err);
      dispatch(
        uiActions.showNotification({
          type: "error",
          message: "Sending request failed",
          isOpen: true,
        })
      );
    }
  };
};
