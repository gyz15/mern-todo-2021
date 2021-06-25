import React from "react";
import add_icon from "../../images/add_icon.svg";

const AddIcon = () => {
  return (
    <div>
      <img
        src={add_icon}
        alt="Add New Todo"
        style={{ width: "2rem", margin: "auto", display: "block" }}
      />
    </div>
  );
};

export default AddIcon;
