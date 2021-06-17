import React from "react";

const Input = ({
  type = "text",
  value = "",
  placeholder = "",
  onChange = () => {},
  error,
}) => {
  return (
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
      {error && <small>{error}</small>}
    </>
  );
};

export default Input;
