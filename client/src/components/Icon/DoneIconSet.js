import React from "react";
import done_icon from "../../images/done_icon.svg";
import not_done_icon from "../../images/not_done_icon.svg";
import styled from "styled-components";

const DoneIconSet = ({ done, setDone }) => {
  return (
    <IconDiv onClick={setDone}>
      <img
        src={done ? done_icon : not_done_icon}
        alt="Cancel"
        style={{ width: "2rem", margin: "auto", display: "block" }}
      />
    </IconDiv>
  );
};

const IconDiv = styled.div`
  cursor: pointer;
`;

export default DoneIconSet;
