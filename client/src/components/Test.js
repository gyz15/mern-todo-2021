import React from "react";
import axios from "../axios-config";

const Test = () => {
  axios.get("/").then((res) => console.log(res.data));
  return <h1>test</h1>;
};

export default Test;
