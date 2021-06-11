import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

const PrivateRoute = ({ component, kwargs }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? (
    <Route {...kwargs} component={component} />
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
