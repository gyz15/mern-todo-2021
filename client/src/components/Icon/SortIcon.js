import React from "react";
import sort_icon_on from "../../images/sort_icon_on.svg";
import sort_icon_off from "../../images/sort_icon_off.svg";

const SortIcon = ({ active = false }) => {
  return (
    <div>
      <img
        src={active ? sort_icon_on : sort_icon_off}
        alt="Cancel"
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </div>
  );
};

export default SortIcon;
