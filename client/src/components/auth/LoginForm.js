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
import { FormButton, InputContainer } from "../style/Components";

// Animation
import { ButtonZoom } from "../animations/variant";

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

      <FormButton
        variants={ButtonZoom}
        whileHover="focused"
        whileFocus="focused"
        type="sumbit"
      >
        Let's Go
      </FormButton>
    </form>
  );
};

export default LoginForm;
