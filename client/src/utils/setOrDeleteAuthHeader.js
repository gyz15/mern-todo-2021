// @import Config
import axios from "../axios-config";

// @used_in ["../App","../actions/authAction"]
// @desc Set auth header to token if token provided, else clear auth header
const setOrDeleteAuthHeader = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setOrDeleteAuthHeader;
