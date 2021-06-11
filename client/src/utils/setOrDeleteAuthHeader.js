import axios from "../axios-config";

const setOrDeleteAuthHeader = (token) => {
  // Set auth header to token if token provided, else clear auth header
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setOrDeleteAuthHeader;
