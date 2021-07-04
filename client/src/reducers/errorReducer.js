// @import Types
import { SET_ERRORS, CLEAR_ERRORS } from "../actions/types";

// @intial_state
const initialState = {
  errors: {},
};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: {},
      };
    default:
      return state;
  }
}
