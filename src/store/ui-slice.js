import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { notification: { type: "", message: "", isOpen: false } },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        message: action.payload.message,
        type: action.payload.type,
        isOpen: action.payload.isOpen,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
