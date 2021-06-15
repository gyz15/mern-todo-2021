// TODO combine with update form
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../actions/todoActions";

const CreateTodo = () => {
  const [description, setDescription] = useState("");
  const [have_due, setHave_due] = useState(false);
  const [due_date, setDue_date] = useState("");
  const [is_daily, setIs_Daily] = useState(false);
  const dispatch = useDispatch();

  const todoCreateHandler = (e) => {
    e.preventDefault();
    const createData = {
      description: description,
      have_due: have_due,
      due_date: due_date,
      is_daily: is_daily,
    };
    dispatch(addTodo(createData));
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
          value={have_due}
          onChange={(e) => {
            setHave_due(e.target.value);
          }}
          placeholder="Have Due"
        />
        <input
          type="date"
          value={due_date}
          onChange={(e) => {
            setDue_date(e.target.value);
          }}
          placeholder="Due Date"
        />
        <input
          type="checkbox"
          value={is_daily}
          onChange={(e) => {
            setIs_Daily(e.target.value);
          }}
          placeholder="Is Daily"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateTodo;
