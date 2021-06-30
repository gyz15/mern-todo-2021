import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ErrorPopUp } from "../animations/variant";

const Input = ({
  type = "text",
  value = "",
  placeholder = "",
  onChange = () => {},
  error,
  label,
}) => {
  return (
    <>
      <label>{label}</label>
      <StyledInput
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      ></StyledInput>
      {error && (
        <ErrorMessage initial="hidden" variants={ErrorPopUp} animate="enter">
          {error}
        </ErrorMessage>
      )}
    </>
  );
};

const ErrorMessage = styled(motion.small)`
  color: ${(props) => props.theme.fontColorErr};
  font-weight: 500;
`;

const StyledInput = styled.input`
  display: block;
`;

export default Input;
