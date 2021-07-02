import React from "react";
import user from "../../images/user.svg";

import styled from "styled-components";
import AppTheme from "../style/Theme";

const UserIcon = ({ size = AppTheme.iconSizeLarge, onClickHandler }) => {
  return (
    <IconDiv onClick={onClickHandler}>
      <img
        src={user}
        alt="User"
        style={{ width: `${size}rem`, margin: "auto", display: "inline-block" }}
      />
    </IconDiv>
  );
};

const IconDiv = styled.div`
  display: inline-block;
  cursor: pointer;
`;

export default UserIcon;
