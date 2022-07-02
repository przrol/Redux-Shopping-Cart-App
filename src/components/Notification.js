import { Alert } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";

const Notification = ({ type, message }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(
      uiActions.showNotification({
        isOpen: false,
      })
    );
  };

  return (
    <div>
      <Alert onClose={handleClose} severity={type}>
        {message}
      </Alert>
    </div>
  );
};

export default Notification;
