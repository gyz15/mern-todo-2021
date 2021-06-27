// TODO solve when straight use url will redirect to home page
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateTodo } from "../../actions/todoActions";

import styled from "styled-components";
import Input from "../common/Input";
import Cross from "../Icon/Cross";
import CheckboxInput from "../common/CheckboxInput";

const TodoDetail = ({ todos, pathId }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [description, setDescription] = useState("");
  const [haveDue, sethaveDue] = useState(false);
  const [dueDate, setDueDate] = useState("");
  const [isDaily, setIsDaily] = useState(false);
  const [done, setDone] = useState(false);

  const { errors } = useSelector((state) => state.errors);

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
    setDueDate(
      todoObj.haveDue
        ? new Date(todoObj.dueDate).toISOString().replace("Z", "")
        : ""
    );
    setIsDaily(todoObj.isDaily);
    setDone(todoObj.done);
    console.log(dueDate);
  };

  const userCloseEditWindowHandler = () => {
    history.push("/");
  };
  const quitPage = (e) => {
    if (e.target.classList.contains("edit-page")) {
      history.push("/");
    }
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
    const redirectPath = "/";
    dispatch(updateTodo(pathId, updateData, history, redirectPath));
  };

  return (
    <EditPage className="edit-page" onClick={quitPage}>
      <EditContainer>
        <Taskbar>
          <h2>Edit Todo</h2>
          <Cross onClickHandler={userCloseEditWindowHandler} right={true} />
        </Taskbar>
        <form
          onSubmit={(e) => {
            todoUpdateHandler(e);
          }}
        >
          <InputContainer>
            <Input
              type="text"
              value={description}
              label="Description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              error={errors.description}
            />
          </InputContainer>
          <InputContainer>
            <CheckboxInput
              checked={haveDue}
              disabled={isDaily}
              onClickHandler={(e) => {
                sethaveDue(!haveDue);
              }}
              label="Have Due Date"
              error={errors.haveDue}
            />
          </InputContainer>
          <InputContainer>
            <DateDiv haveDue={haveDue}>
              <Input
                type="datetime-local"
                value={dueDate}
                onChange={(e) => {
                  setDueDate(e.target.value);
                }}
                label="Due Date"
                error={errors.dueDate}
              />
            </DateDiv>
          </InputContainer>
          <InputContainer>
            <CheckboxInput
              checked={isDaily}
              disabled={haveDue}
              onClickHandler={(e) => {
                setIsDaily(!isDaily);
              }}
              label="Is Daily"
              error={errors.isDaily}
            />
          </InputContainer>
          <UpdateButton type="submit">Update</UpdateButton>
        </form>
      </EditContainer>
    </EditPage>
  );
};

const pathIdInTodos = (pathId, todos) => {
  return todos.find((todo) => todo._id.toString() === pathId.toString());
};

const EditPage = styled.div`
  position: fixed;
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const EditContainer = styled.div`
  min-width: 25rem;
  max-width: 30rem;
  min-height: 20rem;
  max-height: 40rem;
  background-color: #edf7fe;
  padding: 2rem;
  border-radius: 1rem;
`;

const Taskbar = styled.div`
  width: 100%;
  display: flex;
  h2 {
    font-size: 2rem;
    padding: 0rem;
    font-weight: 550;
  }
`;

const InputContainer = styled.div`
  margin: 0.5rem 0.8rem 0rem 0rem;
  label {
    display: block;
    padding-bottom: 0.2rem;
    font-weight: 450;
    font-size: 1.5rem;
  }
  input[type="text"] {
    width: 100%;
    border: none;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    &:focus {
      border: none;
      outline: none;
    }
  }
`;

const UpdateButton = styled.button`
  margin-top: 1rem;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.2rem;
  display: inline-block;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.fontColorLight};
  width: auto;
  position: left;
  background: ${(props) => props.theme.actionLinear};
  &:hover {
    cursor: pointer;
  }
`;
const DateDiv = styled.div`
  ${(props) => (!props.haveDue ? "display:none;" : "")}
`;

export default TodoDetail;
