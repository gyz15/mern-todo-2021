// @import Pakcages
import React from "react";
import styled from "styled-components";

// @import Images
import cross from "../../images/cross.svg";

const Cross = ({ onClickHandler, right = false }) => {
  return (
    <IconDiv right={right} onClick={onClickHandler}>
      <img
        src={cross}
        alt="Cancel"
        style={{ width: "1.5rem", margin: "auto", display: "block" }}
      />
    </IconDiv>
  );
};

const IconDiv = styled.div`
  cursor: pointer;
  ${(props) => (props.right ? "margin-left:auto;" : "")}
`;

export default Cross;
