import React from "react";
import done_icon from "../../images/done_icon.svg";
import not_done_icon from "../../images/not_done_icon.svg";

const DoneIconSet = ({ done, setDone }) => {
  return (
    <div onClick={setDone}>
      <img
        src={done ? done_icon : not_done_icon}
        alt="Cancel"
        style={{ width: "2rem", margin: "auto", display: "block" }}
      />
    </div>
  );
};

export default DoneIconSet;
