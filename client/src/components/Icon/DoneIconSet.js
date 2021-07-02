import React from "react";
import done_icon from "../../images/done_icon.svg";
import styled from "styled-components";
import AnimatedNotDoneIcon from "./AnimatedNotDoneIcon";
import { motion } from "framer-motion";
import { ObjectZoom } from "../animations/variant";

const DoneIconSet = ({ done, setDone }) => {
  return (
    <IconDiv
      variants={ObjectZoom}
      whileTap="pressed"
      whileHover="focused"
      onClick={setDone}
    >
      {done ? (
        <img
          src={done_icon}
          alt="Cancel"
          style={{ width: "2rem", margin: "auto", display: "block" }}
        />
      ) : (
        <AnimatedNotDoneIcon />
      )}
    </IconDiv>
  );
};

const IconDiv = styled(motion.div)`
  cursor: pointer;
`;

export default DoneIconSet;
