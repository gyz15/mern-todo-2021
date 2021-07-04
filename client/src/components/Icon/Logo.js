// @import Package
import React from "react";

// @import Images
import logo from "../../images/logo.svg";

const Logo = ({ size = 200 }) => {
  return (
    <div>
      <img
        src={logo}
        alt="MERN Todo App 2021"
        style={{ width: `${size}px`, margin: "auto", display: "block" }}
      />
    </div>
  );
};

export default Logo;
