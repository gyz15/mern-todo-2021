import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../actions/todoActions";
import DoneIconSet from "../Icon/DoneIconSet";
import DeleteIcon from "../Icon/DeleteIcon";

// Styling
import styled from "styled-components";

const TodoObjBlockView = ({ data, done = true }) => {
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
  // TODO onclick function on icon
  // TODO ondouble click function on rest of div
  return (
    <TodoDiv onDoubleClick={editHandler} done={done}>
      <DoneIconSet done={done} setDone={setDone} />
      <Description done={done}>{data.description}</Description>
      <AlignRight>
        <DeleteIcon deleteHandler={setDelete} />
      </AlignRight>
    </TodoDiv>
  );
};

const Description = styled.h3`
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
`;

const TodoDiv = styled.div`
  height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0rem 1.5rem;
  background: ${(props) =>
    props.done ? props.theme.color_4 : props.theme.color_2};
  margin: 1rem 0rem;
  border-radius: 1rem;
`;

const AlignRight = styled.div`
  margin-left: auto;
`;

export default TodoObjBlockView;
