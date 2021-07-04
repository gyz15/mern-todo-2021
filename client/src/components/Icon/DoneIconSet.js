// @import Packages
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// @import Animations
import AnimatedNotDoneIcon from "./AnimatedNotDoneIcon";
import { ObjectZoom } from "../animations/variant";

const DoneIconSet = ({ done, setDone }) => {
  return (
    <IconDiv
      variants={ObjectZoom}
      whileTap="pressed"
      whileHover="focused"
      onClick={setDone}
    >
      <AnimatedNotDoneIcon done={done} />
    </IconDiv>
  );
};

const IconDiv = styled(motion.div)`
  cursor: pointer;
`;

export default DoneIconSet;
