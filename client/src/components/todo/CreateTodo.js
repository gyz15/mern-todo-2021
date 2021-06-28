// TODO combine with update form
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addTodo, sortTodo } from "../../actions/todoActions";
import Input from "../common/Input";
import CheckboxInput from "../common/CheckboxInput";
import Cross from "../Icon/Cross";

import styled from "styled-components";

const CreateTodo = ({ sortBy, ascending }) => {
  const [description, setDescription] = useState("");
  const [haveDue, setHaveDue] = useState(false);
  const [dueDate, setDue_date] = useState("");
  const [isDaily, setIs_Daily] = useState(false);
  const { errors } = useSelector((state) => state.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  // Normal Quit Handler for user clicking "X"
  const quitHandler = () => {
    history.push("/");
  };

  const todoCreateHandler = (e) => {
    e.preventDefault();
    const createData = {
      description: description,
      haveDue: haveDue,
      dueDate: dueDate,
      isDaily: isDaily,
    };
    dispatch(addTodo(createData, history, sortBy, ascending));
  };

  useEffect(() => {
    if (!haveDue) {
      setDue_date("");
    }
  }, [haveDue]);

  useEffect(() => {}, [isDaily, haveDue]);

  // Quit Handler for user clicking Card Shadow
  const quitPage = (e) => {
    if (e.target.classList.contains("create-page")) {
      history.push("/");
    }
  };

  return (
    <CreatePage className="create-page" onClick={quitPage}>
      <CreateContainer>
        <Taskbar>
          <h2>Create A Todo</h2>
          <Cross onClickHandler={quitHandler} right={true} />
        </Taskbar>
        <form
          onSubmit={(e) => {
            todoCreateHandler(e);
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
                setHaveDue(!haveDue);
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
                  setDue_date(e.target.value);
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
                setIs_Daily(!isDaily);
              }}
              label="Is Dailly"
              error={errors.isDaily}
            />
          </InputContainer>
          <CreateButton type="submit">Create</CreateButton>
        </form>
      </CreateContainer>
    </CreatePage>
  );
};

const CreatePage = styled.div`
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

const CreateContainer = styled.div`
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

const DateDiv = styled.div`
  ${(props) => (!props.haveDue ? "display:none;" : "")}
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

const CreateButton = styled.button`
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

export default CreateTodo;
