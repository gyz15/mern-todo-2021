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
import CreateTodo from "./components/todo/CreateTodo";

// Actions
import { setUser, logoutUser } from "./actions/authActions";

// Styling
import GlobalStyles from "./components/style/GlobalStyles";
import AppTheme from "./components/style/Theme";
import { ThemeProvider } from "styled-components";

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
          <PrivateRoute exact path="/todo/add" component={CreateTodo} />
          <PrivateRoute exact path={["/", "/todo/:id"]} component={Home} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
