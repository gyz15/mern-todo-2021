// @import Packages
import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component, kwargs }) => {
  // Check if user is authenticated
  const { isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();
  return isAuthenticated ? (
    <Route {...kwargs} component={component} />
  ) : (
    // Redirect user to requested path after successfully login with state
    <Redirect
      to={{
        pathname: "/login",
        state: { loginRedirectUrl: location.pathname },
      }}
    />
  );
};

export default PrivateRoute;
