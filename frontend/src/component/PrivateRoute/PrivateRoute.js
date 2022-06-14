import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthorized = localStorage.getItem("token");
  const { loading, isAuthenticated, user } = useSelector(
    (state) => state?.user
  );

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
