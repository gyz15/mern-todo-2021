// TODO complete sortTodoBy and editObjInArr function
import {
  TODO_LOADING,
  SET_TODOS,
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  SORT_TODO_BY,
} from "../actions/types";
import editObjInArr from "../utils/editObjInArr";
import sortTodoBy from "../utils/sortTodoBy";

const initialState = {
  todos: [],
  loading: false,
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: editObjInArr(action.payload, [...state.todos], false),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: editObjInArr(action.payload, ...state.todos, true),
      };
    case SORT_TODO_BY:
      return {
        ...state,
        todos: sortTodoBy(action.payload, ...state.todos),
      };
    default:
      return state;
  }
}
