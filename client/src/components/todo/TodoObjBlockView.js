// TODO Set done function
import React from "react";
import { useHistory } from "react-router-dom";
import { deleteTodo } from "../../actions/todoActions";

const TodoObjBlockView = ({ data }) => {
  const history = useHistory();
  const editHandler = () => {
    history.push(`/todo/${data._id}`);
  };
  const setDone = () => {};
  return (
    <div style={{ border: "1px solid black" }}>
      <h3>Todo Description: {data.description}</h3>
      <h3>Done: {data.done.toString()}</h3>
      <button onClick={editHandler}>Edit</button>
      <button onClick={setDone}>Done</button>
      <button>Delete</button>
    </div>
  );
};

export default TodoObjBlockView;
