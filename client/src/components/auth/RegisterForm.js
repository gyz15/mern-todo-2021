import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// Actions
import { registerUser } from "../../actions/authActions";

// Components
import Input from "../common/Input";

// Styling
import styled from "styled-components";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { errors } = useSelector((state) => state.errors);

  const registerHandler = (e) => {
    e.preventDefault();
    const registerData = {
      username: username,
      password: password,
      password2: password2,
    };
    dispatch(registerUser(registerData, history));
  };

  return (
    <form onSubmit={(e) => registerHandler(e)}>
      <InputContainer>
        <Input
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={errors.username}
        />
      </InputContainer>
      <InputContainer>
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />
      </InputContainer>
      <InputContainer>
        <Input
          label="Confirm Password"
          type="password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          error={errors.password2}
        />
      </InputContainer>
      <RegisterButton type="sumbit">Register</RegisterButton>
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

const RegisterButton = styled.button`
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
export default RegisterForm;
