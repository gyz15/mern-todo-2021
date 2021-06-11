// Packages
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";

// Private Route
import PrivateRoute from "./components/common/PrivateRoute";

// Utils
import setOrDeleteAuthHeader from "./utils/setOrDeleteAuthHeader";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Actions
import { setUser, logoutUser } from "./actions/authActions";

function App() {
  const dispatch = useDispatch();

  // Local Storage Token Validation
  useEffect(() => {
    if (localStorage.jwtToken) {
      // TODO handle error if user set custom jwt token
      setOrDeleteAuthHeader(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.jwtToken);

      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        // Clear user token and set not authenticated if token expired
        dispatch(logoutUser());
      }
      dispatch(setUser(decoded));
    }
  }, [dispatch]);
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
      </Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </div>
  );
}

export default App;
