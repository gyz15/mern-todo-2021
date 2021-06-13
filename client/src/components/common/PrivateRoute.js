import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import React from "react";

const PrivateRoute = ({ component, kwargs }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();
  return isAuthenticated ? (
    <Route {...kwargs} component={component} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { loginRedirectUrl: location.pathname },
      }}
    />
  );
};

export default PrivateRoute;
