import React from "react";
import delete_icon from "../../images/delete_icon.svg";

const DeleteIcon = ({ deleteHandler }) => {
  return (
    <div onClick={deleteHandler}>
      <img
        src={delete_icon}
        alt="Cancel"
        style={{ width: "2rem", margin: "auto", display: "block" }}
      />
    </div>
  );
};

export default DeleteIcon;
