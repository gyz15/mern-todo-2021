// @import Types
import { SET_CURRENT_USER } from "../actions/types";

// @import Utils
import isEmpty from "../utils/isEmpty";

// @intial_state
const initialState = {
  isAuthenticated: false,
  user: {},
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    default:
      return state;
  }
}
