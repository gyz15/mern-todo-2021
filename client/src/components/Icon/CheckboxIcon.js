import React, { useState, useEffect } from "react";
import styled from "styled-components";
import checkbox_blank from "../../images/checkbox_blank.svg";
import checkbox_disabled from "../../images/checkbox_disabled.svg";
import checkbox_checked from "../../images/checkbox_checked.svg";
import AppTheme from "../style/Theme";

const CheckboxIcon = ({
  size = AppTheme.iconSize,
  checked,
  disabled,
  onClickHandler,
}) => {
  const [icon, setIcon] = useState(checkbox_blank);
  useEffect(() => {
    if (disabled) {
      setIcon(checkbox_disabled);
    } else if (checked) {
      setIcon(checkbox_checked);
    } else {
      setIcon(checkbox_blank);
    }
  }, [checked, disabled]);
  return (
    <IconDiv disabled={disabled} onClick={disabled ? () => {} : onClickHandler}>
      <img
        src={icon}
        alt="Cancel"
        style={{ width: `${size}rem`, margin: "auto", display: "block" }}
      />
    </IconDiv>
  );
};

const IconDiv = styled.div`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin-left: auto;
`;

export default CheckboxIcon;
