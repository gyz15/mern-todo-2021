import React from "react";
import delete_icon from "../../images/delete_icon.svg";

const DeleteIcon = () => {
  return (
    <div>
      <img
        src={delete_icon}
        alt="Cancel"
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </div>
  );
};

export default DeleteIcon;
