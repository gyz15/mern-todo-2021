// TODO extract errors from redux state
// TODO Split into component
// Packages
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// Actions
import { registerUser } from "../actions/authActions";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { errors } = useSelector((state) => state.errors);
  const history = useHistory();
  const dispatch = useDispatch();

  const registerHandler = (e) => {
    e.preventDefault();
    const registerData = {
      username: username,
      password: password,
      password2: password2,
    };
    dispatch(registerUser(registerData, history));
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated, history]);
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => registerHandler(e)}>
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
        <input
          type="password"
          value={password2}
          placeholder="Confirm Password"
          onChange={(e) => setPassword2(e.target.value)}
        />
        {errors.password2 && <small>{errors.password2}</small>}
        <button type="sumbit">Register</button>
      </form>
    </div>
  );
};

export default Register;
