// @import Packages
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";

// @import Component
import PrivateRoute from "./components/common/PrivateRoute";

// @import Util
import setOrDeleteAuthHeader from "./utils/setOrDeleteAuthHeader";

// @import Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

// @import Actions
import { setUser, logoutUser } from "./actions/authActions";

// @import Styling
import GlobalStyles from "./components/style/GlobalStyles";
import AppTheme from "./components/style/Theme";

function App() {
  const dispatch = useDispatch();

  // Local Storage Token Validation
  useEffect(() => {
    if (localStorage.jwtToken) {
      setOrDeleteAuthHeader(localStorage.jwtToken);
      try {
        const decoded = jwt_decode(localStorage.jwtToken);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
          // Clear user token and set not authenticated if token expired
          dispatch(logoutUser());
        }
        dispatch(setUser(decoded));
      } catch (err) {
        dispatch(logoutUser());
      }
    }
  }, [dispatch]);
  return (
    <div className="App">
      <ThemeProvider theme={AppTheme}>
        <GlobalStyles />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Switch>
          <PrivateRoute
            exact
            path={["/", "/todo/add", "/todo/:id", "/profile"]}
            component={Home}
          />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
