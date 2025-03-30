// src/redux/store.js
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootSlice";
import adminReducer from "./Adminslice"; // Add this import

const reducer = combineReducers({
  root: rootReducer,
  admin: adminReducer // Add this line
});

const store = configureStore({
  reducer,
});

export default store;