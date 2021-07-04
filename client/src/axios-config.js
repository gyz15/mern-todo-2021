// @import Package
import axios from "axios";

// @desc During development set an app url for axios to work
var environment = process.env.NODE_ENV || "development";
export default axios.create({
  baseURL:
    environment !== "development"
      ? process.env.APP_URL
      : "http://localhost:5000",
  headers: {
    "Content-type": "application/json",
  },
});
