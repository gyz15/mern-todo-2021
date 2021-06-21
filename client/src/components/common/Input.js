import React from "react";
import styled from "styled-components";

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
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

const ErrorMessage = styled.small`
  color: ${(props) => props.theme.fontColorErr};
  font-weight: 500;
`;

const StyledInput = styled.input`
  display: block;
`;

export default Input;
