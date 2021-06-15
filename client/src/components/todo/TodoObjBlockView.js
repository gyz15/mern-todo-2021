import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../actions/todoActions";

const TodoObjBlockView = ({ data }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const editHandler = () => {
    history.push(`/todo/${data._id}`);
  };
  const setDone = () => {
    dispatch(updateTodo(data._id, { ...data, done: !data.done }));
  };
  const setDelete = () => {
    dispatch(deleteTodo(data._id));
  };
  return (
    <div style={{ border: "1px solid black" }}>
      <h3>Todo Description: {data.description}</h3>
      <h3>Done: {data.done.toString()}</h3>
      <button onClick={editHandler}>Edit</button>
      <button onClick={setDone}>Done</button>
      <button onClick={setDelete}>Delete</button>
    </div>
  );
};

export default TodoObjBlockView;
