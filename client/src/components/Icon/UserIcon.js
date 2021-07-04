// @import Packages
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

// @import Images
import user from "../../images/user.svg";

// @import Styling
import AppTheme from "../style/Theme";

// @import Animation
import { ObjectZoom } from "../animations/variant";

const UserIcon = ({ size = AppTheme.iconSizeLarge, onClickHandler }) => {
  return (
    <IconDiv
      onClick={onClickHandler}
      whileTap="pressed"
      whileHover="focused"
      variants={ObjectZoom}
    >
      <img
        src={user}
        alt="User"
        style={{ width: `${size}rem`, margin: "auto", display: "inline-block" }}
      />
    </IconDiv>
  );
};

const IconDiv = styled(motion.div)`
  cursor: pointer;
`;

export default UserIcon;
