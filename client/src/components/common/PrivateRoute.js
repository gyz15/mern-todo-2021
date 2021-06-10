import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

const PrivateRoute = ({ kwargs }) => {
  const user = useSelector((state) => state.auth);
  return user.isAuthenticated ? (
    <Route {...kwargs} />
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
