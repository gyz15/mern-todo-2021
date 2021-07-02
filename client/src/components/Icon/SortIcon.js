import React from "react";
import sort_icon_on from "../../images/sort_icon_on.svg";
import sort_icon_off from "../../images/sort_icon_off.svg";

import styled from "styled-components";
import AppTheme from "../style/Theme";
import { motion } from "framer-motion";
import { ObjectZoom } from "../animations/variant";

const SortIcon = ({
  size = AppTheme.iconSizeLarge,
  active = false,
  onClickHandler,
}) => {
  return (
    <SortIconDiv
      variants={ObjectZoom}
      whileHover="focused"
      whileTap="pressed"
      onClick={onClickHandler}
    >
      <img
        src={active ? sort_icon_on : sort_icon_off}
        alt="Cancel"
        style={{ width: `${size}rem`, margin: "auto", display: "block" }}
      />
    </SortIconDiv>
  );
};

const SortIconDiv = styled(motion.div)`
  cursor: pointer;
  margin: 0.5rem;
`;

export default SortIcon;
