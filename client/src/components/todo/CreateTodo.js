// @import Packages
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

// @import Action
import { addTodo } from "../../actions/todoActions";

// @import Components
import Input from "../common/Input";
import CheckboxInput from "../common/CheckboxInput";
import Cross from "../Icon/Cross";
import {
  FormButton,
  InputContainer,
  PageBackground,
  PopUpContainer,
  Taskbar,
} from "../style/Components";

// @import Animation
import { ObjectZoom } from "../animations/variant";

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
  // Quit Handler for user clicking Card Shadow
  const quitPage = (e) => {
    if (e.target.classList.contains("background")) {
      history.push("/");
    }
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

  return (
    <PageBackground className="background" onClick={quitPage}>
      <PopUpContainer>
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
          <FormButton
            variants={ObjectZoom}
            whileHover="focused"
            whileFocus="focused"
            type="submit"
          >
            Create
          </FormButton>
        </form>
      </PopUpContainer>
    </PageBackground>
  );
};

const DateDiv = styled.div`
  ${(props) => (!props.haveDue ? "display:none;" : "")}
`;

export default CreateTodo;
