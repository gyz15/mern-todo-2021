// @import Packages
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// @import Components
import Input from "../common/Input";

// @import Actions
import { loginUser } from "../../actions/authActions";

// @import Styles
import { FormButton, InputContainer } from "../style/Components";

// @import Animation
import { motion } from "framer-motion";
import { ObjectZoom } from "../animations/variant";

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
    <motion.form onSubmit={(e) => loginHandler(e)}>
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
        variants={ObjectZoom}
        whileHover="focused"
        whileTap="pressed"
        onClick={() => loginHandler}
      >
        Let's Go
      </FormButton>
    </motion.form>
  );
};

export default LoginForm;
