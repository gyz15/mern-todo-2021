import React, { useState } from "react";
import styled from "styled-components";
import AddIcon from "../Icon/AddIcon";
import { motion } from "framer-motion";
import { ObjectUp } from "../animations/variant";

const AddTodoBlock = ({ handleOnClick }) => {
  const [divOnHover, setDivOnHover] = useState(false);

  return (
    <motion.div layoutId="AddTodo">
      <AddTodoDiv
        variants={ObjectUp}
        whileHover="focused"
        whileTap="pressed"
        onClick={handleOnClick}
        divOnHover={divOnHover}
        onMouseEnter={() => setDivOnHover(true)}
        onMouseLeave={() => setDivOnHover(false)}
      >
        <AddIcon />
        <Description>Add New Task</Description>
      </AddTodoDiv>
      <Line />
    </motion.div>
  );
};

const AddTodoDiv = styled(motion.div)`
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
  font-weight: ${(props) => `${props.theme.fontWeightMedium}`};
  font-size: ${(props) => `${props.theme.fontSizeMedium}rem`};
`;
export default AddTodoBlock;
