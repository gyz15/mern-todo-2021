import React from "react";
import styled from "styled-components";

const Input = ({
  type = "text",
  value = "",
  placeholder = "",
  onChange = () => {},
  error,
}) => {
  return (
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

const ErrorMessage = styled.small`
  color: ${(props) => props.theme.fontColorErr};
  font-weight: 500;
`;

export default Input;
