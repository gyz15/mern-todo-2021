import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// Actions
import { registerUser } from "../../actions/authActions";

// Components
import Input from "../common/Input";

// Styling
import { FormButton, InputContainer } from "../style/Components";

// Animation
import { ButtonZoom } from "../animations/variant";

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
      <FormButton
        variants={ButtonZoom}
        whileHover="focused"
        whileFocus="focused"
        type="sumbit"
      >
        Register
      </FormButton>
    </form>
  );
};

export default RegisterForm;
