import React, { useState } from "react";
import styled from "styled-components";
import AddIcon from "../Icon/AddIcon";

const AddTodoBlock = ({ handleOnClick }) => {
  const [divOnHover, setDivOnHover] = useState(false);

  return (
    <>
      <AddTodoDiv
        onClick={handleOnClick}
        divOnHover={divOnHover}
        onMouseEnter={() => setDivOnHover(true)}
        onMouseLeave={() => setDivOnHover(false)}
      >
        <AddIcon />
        <Description>Add New Task</Description>
      </AddTodoDiv>
      <Line />
    </>
  );
};

const AddTodoDiv = styled.div`
  height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0rem 1.5rem;
  background-color: ${(props) => (props.divOnHover ? "#D3F7FF" : "#EFFCFF")};
  margin: 1rem 0rem;
  border-radius: 1rem;
  cursor: pointer;
  border: 0.2rem dashed #676767;
`;

const Line = styled.div`
  height: 0.15rem;
  background-color: black;
  border-radius: 1rem;
`;

const Description = styled.h3`
  margin: 1.5rem;
  color: #676767;
  font-weight: 500;
`;
export default AddTodoBlock;
