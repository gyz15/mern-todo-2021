// @import Packages
import axios from "../axios-config";
import jwt_decode from "jwt-decode";

// @import Types
import { SET_CURRENT_USER, SET_ERRORS, CLEAR_ERRORS } from "./types";

// @import Utils
import setOrDeleteAuthHeader from "../utils/setOrDeleteAuthHeader";

// @action Register User
export const registerUser = (registerData, history) => (dispatch) => {
  axios
    .post("/api/user/register", registerData)
    .then((res) => {
      dispatch({
        type: CLEAR_ERRORS,
      });
      history.push("/login");
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};
// @action Login User
export const loginUser = (loginData) => (dispatch) => {
  axios
    .post("/api/user/login", loginData)
    .then((res) => {
      dispatch({
        type: CLEAR_ERRORS,
      });
      const { token } = res.data;
      // Set auth to header for future api fetching
      setOrDeleteAuthHeader(token);
      localStorage.setItem("jwtToken", token);
      const decoded = jwt_decode(token);
      dispatch(setUser(decoded));
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};
// @action Delete User
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

// @action Set user
export const setUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// @action Logout User
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  setOrDeleteAuthHeader(false);
  dispatch(setUser({}));
};
