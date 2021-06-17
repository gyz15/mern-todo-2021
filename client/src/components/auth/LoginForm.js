// Packages
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// Components
import Input from "../common/Input";

// Actions
import { loginUser } from "../../actions/authActions";

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { errors } = useSelector((state) => state.errors);

  const loginHandler = (e) => {
    e.preventDefault();
    const loginData = {
      username: username,
      password: password,
    };
    dispatch(loginUser(loginData, history));
  };
  return (
    <form onSubmit={(e) => loginHandler(e)}>
      <Input
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        error={errors.username}
      />
      <Input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
      />
      <button type="sumbit">Login</button>
    </form>
  );
};

export default LoginForm;
