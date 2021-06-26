import React from "react";
import styled from "styled-components";
import Input from "./Input";

const CheckboxInput = ({ ...attributes }) => {
  return (
    <CheckboxStyled>
      <Input {...attributes} />
    </CheckboxStyled>
  );
};

const CheckboxStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  label {
    display: block;
  }
  input {
    margin-left: auto;
  }
`;

export default CheckboxInput;
