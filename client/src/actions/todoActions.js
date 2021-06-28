import axios from "../axios-config";
import {
  TODO_LOADING,
  CLEAR_ERRORS,
  SET_ERRORS,
  SET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  SORT_TODO_BY,
  EDIT_TODO,
} from "./types";

// Get all todo of user
export const getUserTodos = () => (dispatch) => {
  dispatch(loadingTodo());
  axios
    .get("/api/todo")
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({
        type: SET_TODOS,
        payload: res.data.todoList,
      });
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
      // console.log(err.response.data);
    });
};
// Add a todo
export const addTodo =
  (newTodoData, history, sortBy, ascending) => (dispatch) => {
    axios
      .post("/api/todo/add", newTodoData)
      .then((res) => {
        // console.log(res.data);
        dispatch({ type: CLEAR_ERRORS });
        dispatch({ type: ADD_TODO, payload: res.data });
        dispatch(sortTodo(sortBy, ascending));
        history.push("/");
      })
      .catch((err) => {
        dispatch({ type: SET_ERRORS, payload: err.response.data });
      });
  };
// Update a todo
export const updateTodo =
  (updateTodoId, updateTodoData, history, redirectPath) => (dispatch) => {
    axios
      .put(`/api/todo/${updateTodoId}`, updateTodoData)
      .then((res) => {
        dispatch({ type: CLEAR_ERRORS });
        dispatch({ type: EDIT_TODO, payload: res.data });
        history.push(redirectPath);
      })
      .catch((err) => {
        dispatch({ type: SET_ERRORS, payload: err.response.data });
      });
  };
// Delete a todo
export const deleteTodo = (deleteTodoId) => (dispatch) => {
  axios
    .delete(`/api/todo/${deleteTodoId}`)
    .then((res) => {
      // console.log(res.data);
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: DELETE_TODO, payload: res.data._doc });
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};
// Sort todo by
export const sortTodo = (sortByValue, ascending) => (dispatch) => {
  dispatch({
    type: SORT_TODO_BY,
    payload: { sortByValue: sortByValue, ascending: ascending },
  });
};

// Set Todo Loading
export const loadingTodo = () => {
  return {
    type: TODO_LOADING,
  };
};
