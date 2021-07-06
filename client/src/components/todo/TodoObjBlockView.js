// @import Packages
import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import Moment from "react-moment";

// @import Actions
import { deleteTodo, updateTodo } from "../../actions/todoActions";

// @import Components
import DoneIconSet from "../Icon/DoneIconSet";
import DeleteIcon from "../Icon/DeleteIcon";

// @import Animation
import { TodoObjZoom } from "../animations/variant";

const TodoObjBlockView = ({ data, done = true }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const editHandler = () => {
    history.push(`/todo/${data._id}`);
  };
  const setDone = (e) => {
    e.stopPropagation();
    dispatch(updateTodo(data._id, { ...data, done: !data.done }, history, "/"));
  };
  const setDelete = (e) => {
    e.stopPropagation();
    dispatch(deleteTodo(data._id));
  };

  return (
    <TodoDiv
      layoutId={data._id.toString()}
      variants={TodoObjZoom}
      whileHover="focused"
      onClick={!done ? editHandler : () => {}}
      done={done}
    >
      <DoneIconSet done={done} setDone={setDone} />
      <DescriptionDiv done={done}>
        <Description>{data.description}</Description>
        {data.dueDate ? (
          <DueDate date={data.dueDate} done={done}>
            Due Date: <Moment format="D/M/YY, h:mm a">{data.dueDate}</Moment>
          </DueDate>
        ) : (
          ""
        )}
      </DescriptionDiv>
      <AlignRight>
        <DeleteIcon done={done} deleteHandler={setDelete} />
      </AlignRight>
    </TodoDiv>
  );
};

const Description = styled.h3`
  padding: 0rem;
  font-size: ${(props) => `${props.theme.fontSizeLight}rem`};
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const TodoDiv = styled(motion.div)`
  cursor: ${(props) => (props.done ? "not-allowed" : "pointer")};
  min-height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0rem 1.2rem;
  background: ${(props) =>
    props.done ? props.theme.color_4 : props.theme.color_2};
  margin: 1rem 0rem;
  border-radius: 1rem;
  @media (max-width: 600px) {
    padding: 1rem 1.2rem;
  }
`;

const AlignRight = styled.div`
  margin-left: auto;
  padding-left: 1rem;
`;

const DescriptionDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
  max-width: 50%;
  padding: 0rem 0rem 0rem 1rem;
  * {
    color: ${(props) =>
      props.done ? props.theme.fontColorLight : props.theme.fontColorDark};
    text-decoration: ${(props) => (props.done ? "line-through" : "none")};
  }
`;

const DueDate = styled.h5`
  margin: 0rem;
  font-size: ${(props) => `${props.theme.fontSizeSmall}rem`};
  ${(props) =>
    Date.parse(props.date) <= Date.now() && !props.done
      ? `time{color:${props.theme.fontColorErr}};`
      : ""}
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export default TodoObjBlockView;
