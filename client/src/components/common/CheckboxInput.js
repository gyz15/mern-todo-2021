// @import Package
import React from "react";
import styled from "styled-components";

// @import Component
import CheckboxIcon from "../Icon/CheckboxIcon";

const CheckboxInput = ({ label, checked, disabled, onClickHandler, error }) => {
  return (
    <CheckboxStyled>
      <label>{label}</label>
      <CheckboxIcon
        checked={checked}
        disabled={disabled}
        onClickHandler={onClickHandler}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
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

const ErrorMessage = styled.small`
  color: ${(props) => props.theme.fontColorErr};
  font-weight: 500;
`;

export default CheckboxInput;
