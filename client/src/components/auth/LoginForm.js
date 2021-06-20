// TODO display errrors in small tag with red styling (refer figmaa)

// Packages
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// Components
import Input from "../common/Input";

// Actions
import { loginUser } from "../../actions/authActions";

// Styles
import styled from "styled-components";

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
      <InputContainer>
        <label>Username</label>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={errors.username}
        />
      </InputContainer>
      <InputContainer>
        <label>Password</label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />
      </InputContainer>

      <LoginButton type="sumbit">Let's Go</LoginButton>
    </form>
  );
};

const InputContainer = styled.div`
  margin: 0.5rem 0.8rem 0rem 0rem;
  label {
    display: block;
    padding-bottom: 0.2rem;
  }
  input {
    width: 80%;
    border: none;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    &:focus {
      border: none;
      outline: none;
    }
  }
`;

const LoginButton = styled.button`
  margin-top: 1rem;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.2rem;
  display: inline-block;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.fontColorLight};
  width: auto;
  position: left;
  background: ${(props) => props.theme.actionLinear};
  &:hover {
    cursor: pointer;
  }
`;

export default LoginForm;
