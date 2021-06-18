// TODO display errrors in small tag with red styling (refer figmaa)

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
      <label>Username</label>
      <Input
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        error={errors.username}
      />

      <label>Password</label>
      <Input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
      />
      <button type="sumbit">Let's Go</button>
    </form>
  );
};

export default LoginForm;
