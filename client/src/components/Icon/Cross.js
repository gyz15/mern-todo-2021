import React from "react";
import cross from "../../images/cross.svg";

const Cross = () => {
  return (
    <div>
      <img
        src={cross}
        alt="Cancel"
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </div>
  );
};

export default Cross;
