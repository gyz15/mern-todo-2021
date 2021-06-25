// TODO combine with update form
// TODO extract error from redux state
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addTodo } from "../../actions/todoActions";

const CreateTodo = () => {
  const [description, setDescription] = useState("");
  const [haveDue, sethaveDue] = useState(false);
  const [dueDate, setDue_date] = useState("");
  const [isDaily, setIs_Daily] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const todoCreateHandler = (e) => {
    e.preventDefault();
    const createData = {
      description: description,
      haveDue: haveDue,
      dueDate: dueDate,
      isDaily: isDaily,
    };
    dispatch(addTodo(createData, history));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          todoCreateHandler(e);
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
          checked={haveDue}
          onChange={(e) => {
            sethaveDue(!haveDue);
          }}
          placeholder="Have Due"
        />
        <input
          type="datetime-local"
          value={dueDate}
          onChange={(e) => {
            setDue_date(e.target.value);
          }}
          placeholder="Due Date"
        />
        <input
          type="checkbox"
          checked={isDaily}
          onChange={(e) => {
            setIs_Daily(!isDaily);
          }}
          placeholder="Is Daily"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateTodo;
