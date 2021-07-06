// @import Packages
import React from "react";
import { motion } from "framer-motion";

// @import Styling
import AppTheme from "../style/Theme";

// @import Animation
import { deleteIconAnimation } from "../animations/variant";

const DeleteIcon = ({ size = AppTheme.iconSize, deleteHandler, done }) => {
  return (
    <div onClick={deleteHandler} style={{ cursor: "pointer" }}>
      <motion.svg
        width={`${size}rem`}
        variants={deleteIconAnimation}
        viewBox="0 0 58 58"
        fill="none"
        whileHover="show"
        stroke={done ? AppTheme.fontColorLight : AppTheme.fontColorDark}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.4117 23.6765V42.6176"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="29" cy="29" r="27.5" strokeWidth="3" />
        <path
          d="M23.5883 23.6765V42.6176"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M29 23.6765V42.6176"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.1765 46V19.6176H39.8236V46H18.1765Z"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.2352 14.2059V11.5H35.7646V14.2059"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.4706 19.6176V15.5588H42.5294V19.6176H15.4706Z"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </div>
  );
};

export default DeleteIcon;
