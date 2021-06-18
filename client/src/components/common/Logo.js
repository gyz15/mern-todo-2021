import React from "react";
import logo from "../../images/logo.svg";

const Logo = () => {
  return (
    <div>
      <img
        src={logo}
        alt="MERN Todo App 2021"
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </div>
  );
};

export default Logo;
