// TODO check requeted path in user todos' id, if not redirect
// TODO exit icon to redirect user back to home
// TODO solve when straight use url will redirect to home page
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateTodo } from "../../actions/todoActions";
import isEmpty from "../../utils/isEmpty";

const TodoDetail = ({ todos, pathId }) => {
  const history = useHistory();
  useEffect(() => {
    if (!pathIdInTodos(pathId, todos)) {
      history.push("/");
    }
  }, []);
  return (
    <div style={{ height: "60vh", border: "1px solid blue" }}>
      <h1>TODO detail</h1>
      <h2>Path id: {pathId}</h2>
      {/* form */}
      <button>X</button>
    </div>
  );
};

const pathIdInTodos = (pathId, todos) => {
  if (todos.length <= 0) {
    console.log("Todos blank");
    return false;
  }
  const list = todos.filter(
    (todoObj) => todoObj._id.toString() === pathId.toString()
  );
  console.log(list);
  return !isEmpty(list);
};

export default TodoDetail;
