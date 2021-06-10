import { Route, Switch, useHistory } from "react-router-dom";
// Private Route
import PrivateRoute from "./components/common/PrivateRoute";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  // TODO Token validation from local storage
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
