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
      console.log(err.response.data);
    });
};
// Add a todo
export const addTodo = (newTodoData) => (dispatch) => {
  axios
    .post("/api/todo/add", newTodoData)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: ADD_TODO, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
      console.log(err.response.data);
    });
};
// Update a todo
export const updateTodo = (updateTodoId, updateTodoData) => (dispatch) => {
  axios
    .put(`/api/todo/${updateTodoId}`, updateTodoData)
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: EDIT_TODO, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: SET_ERRORS, payload: err.response.data });
      console.log(err.response.data);
    });
};
// Delete a todo
export const deleteTodo = (deleteTodoId) => (dispatch) => {
  axios
    .delete(`/api/todo/${deleteTodoId}`)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: DELETE_TODO, payload: res.data._doc });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};
// Sort todo by
export const sortTodo = (sortByValue) => (dispatch) => {
  dispatch({
    type: SORT_TODO_BY,
    payload: sortByValue,
  });
};

// Set Todo Loading
export const loadingTodo = () => {
  return {
    type: TODO_LOADING,
  };
};
