// @import Packages
import React from "react";
import { motion } from "framer-motion";

// @import Styling
import AppTheme from "../style/Theme";

// @import Animation
import { hoverTickPath } from "../animations/variant";

const AnimatedNotDoneIcon = ({ size = AppTheme.iconSize, done }) => {
  // When done is set to true,
  //  stroke => fontColorDark
  //  TickPath initial => 100, while hover => 0
  return (
    <motion.svg
      whileHover={done ? "initial" : "hover"}
      initial={done ? "hover" : "initial"}
      width={`${size}rem`}
      viewBox="0 0 58 58"
      stroke={done ? AppTheme.fontColorLight : AppTheme.fontColorDark}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="29" cy="29" r="27" stroke-width="4" />
      <motion.path
        variants={hoverTickPath}
        initial={done ? "hover" : "initial"}
        d="M17.2414 26.5258L25.4413 41L42.1644 18.1852"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
};

export default AnimatedNotDoneIcon;
