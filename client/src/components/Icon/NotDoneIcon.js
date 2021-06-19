import React from "react";
import not_done_icon from "../../images/not_done_icon.svg";

const NotDoneIcon = () => {
  return (
    <div>
      <img
        src={not_done_icon}
        alt="Cancel"
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </div>
  );
};

export default NotDoneIcon;
