// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import pageTitleReducer from "../redux/slices/pageTitleSlice";

const store = configureStore({
  reducer: {
    pageTitle: pageTitleReducer,
  },
});

export default store;
