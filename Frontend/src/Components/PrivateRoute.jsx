// src/PrivateRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // Check for token (or replace with your auth logic)
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/admin-login" />;
};

export default PrivateRoute;
