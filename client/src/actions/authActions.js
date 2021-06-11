import axios from "../axios-config";
import { SET_CURRENT_USER, SET_ERRORS } from "./types";
import jwt_decode from "jwt-decode";
import setOrDeleteAuthHeader from "../utils/setOrDeleteAuthHeader";

// Register User
export const registerUser = (registerData, history) => (dispatch) => {
  axios
    .post("/api/user/register", registerData)
    .then((res) => {
      history.push("/login");
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};
// Login User
export const loginUser = (loginData) => (dispatch) => {
  axios
    .post("/api/user/login", loginData)
    .then((res) => {
      const { token } = res.data;
      setOrDeleteAuthHeader(token);
      localStorage.setItem("jwtToken", token);
      const decoded = jwt_decode(token);
      dispatch(setUser(decoded));
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};
// Delete User
export const deleteUser = () => (dispatch) => {
  if (window.confirm("Are you sure? This can't be undone")) {
    axios
      .delete("/api/user")
      .then((res) => {
        dispatch(logoutUser());
      })
      .catch((err) => {
        dispatch({ type: SET_ERRORS, payload: err.response.data });
      });
  }
};

// Set user
export const setUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// Logout User
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  setOrDeleteAuthHeader(false);
  dispatch(setUser({}));
};
