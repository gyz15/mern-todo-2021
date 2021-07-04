// @import Package
import { combineReducers } from "redux";

// @import Reducers
import authReducer from "./authReducer";
import todoReducer from "./todoReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  auth: authReducer,
  todo: todoReducer,
  errors: errorReducer,
});
