// TODO Split into component
// Packages
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// Actions
import { loginUser } from "../actions/authActions";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { errors } = useSelector((state) => state.errors);
  const history = useHistory();
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    const loginData = {
      username: username,
      password: password,
    };
    dispatch(loginUser(loginData, history));
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated, history]);
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => loginHandler(e)}>
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <small>{errors.username}</small>}
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <small>{errors.password}</small>}
        <button type="sumbit">Login</button>
      </form>
    </div>
  );
};

export default Login;
