// TODO solve when straight use url will redirect to home page
// TODO use camelCase instead of snake_case on state
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateTodo } from "../../actions/todoActions";

const TodoDetail = ({ todos, pathId }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [description, setDescription] = useState("");
  const [haveDue, sethaveDue] = useState(false);
  const [dueDate, setDueDate] = useState("");
  const [isDaily, setIsDaily] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const todoObjOrNone = pathIdInTodos(pathId, todos);
    if (!todoObjOrNone) {
      history.push("/");
    } else {
      loadTodoData(todoObjOrNone);
    }
  }, [pathId]);

  const loadTodoData = (todoObj) => {
    setDescription(todoObj.description);
    sethaveDue(todoObj.haveDue);
    setDueDate(todoObj.dueDate ? todoObj.dueDate : "");
    setIsDaily(todoObj.isDaily);
    setDone(todoObj.done);
  };

  const userCloseEditWindowHandler = () => {
    history.push("/");
  };

  const todoUpdateHandler = (e) => {
    e.preventDefault();
    const updateData = {
      description: description,
      haveDue: haveDue,
      dueDate: dueDate,
      isDaily: isDaily,
      done: done,
    };
    dispatch(updateTodo(pathId, updateData));
    console.log(updateData);
  };

  return (
    <div style={{ height: "60vh", border: "1px solid blue" }}>
      <h1>TODO detail</h1>
      <h2>Path id: {pathId}</h2>
      <form
        onSubmit={(e) => {
          todoUpdateHandler(e);
        }}
      >
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Description"
        />
        <input
          type="checkbox"
          value={haveDue}
          onChange={(e) => {
            sethaveDue(!haveDue);
          }}
          placeholder="Have Due"
        />
        <input
          type="datetime-local"
          value={dueDate}
          onChange={(e) => {
            setDueDate(e.target.value);
          }}
          placeholder="Due Date"
        />
        <input
          type="checkbox"
          value={isDaily}
          onChange={(e) => {
            setIsDaily(!isDaily);
          }}
          placeholder="Is Daily"
        />
        <button type="submit">Update</button>
      </form>
      <button onClick={userCloseEditWindowHandler}>X</button>
    </div>
  );
};

const pathIdInTodos = (pathId, todos) => {
  return todos.find((todo) => todo._id.toString() === pathId.toString());
};

export default TodoDetail;
