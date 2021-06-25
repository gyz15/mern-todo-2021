import React from "react";
import delete_icon_done from "../../images/delete_icon_done.svg";
import delete_icon_not_done from "../../images/delete_icon_not_done.svg";

const DeleteIcon = ({ deleteHandler, done }) => {
  return (
    <div onClick={deleteHandler} style={{ cursor: "pointer" }}>
      <img
        src={done ? delete_icon_done : delete_icon_not_done}
        alt="Delete"
        style={{
          width: "2rem",
          margin: "auto",
          display: "block",
        }}
      />
    </div>
  );
};

export default DeleteIcon;
