import axios from "../axios-config";

const setOrDeleteAuthHeader = (token) => {
  // Set auth header to token if token provided, else clear auth header
  if (token) {
    axios.default.headers.common["Authorization"] = token;
  } else {
    delete axios.default.headers.common["Authorization"];
  }
};

export default setOrDeleteAuthHeader;
