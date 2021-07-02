import React from "react";
import add_icon from "../../images/add_icon.svg";
import AppTheme from "../style/Theme";

const AddIcon = ({ size = AppTheme.iconSize }) => {
  return (
    <div>
      <img
        src={add_icon}
        alt="Add New Todo"
        style={{ width: `${size}rem`, margin: "auto", display: "block" }}
      />
    </div>
  );
};

export default AddIcon;
