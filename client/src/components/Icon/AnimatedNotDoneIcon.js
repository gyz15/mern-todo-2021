import React from "react";
import { motion } from "framer-motion";
import { hoverTickPath, ObjectZoom } from "../animations/variant";
import AppTheme from "../style/Theme";

const AnimatedNotDoneIcon = ({ size = AppTheme.iconSize }) => {
  return (
    <motion.svg
      whileHover="hover"
      initial="initial"
      width={`${size}rem`}
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="29" cy="29" r="27" stroke="black" stroke-width="4" />
      <motion.path
        variants={hoverTickPath}
        d="M17.2414 26.5258L25.4413 41L42.1644 18.1852"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
};

export default AnimatedNotDoneIcon;
