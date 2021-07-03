// Packages
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

// Components
import TodoDetail from "../components/todo/TodoDetail";
import TodoObjBlockView from "../components/todo/TodoObjBlockView";
import Spinner from "../components/common/Spinner";
import UserIcon from "../components/Icon/UserIcon";
import SortIcon from "../components/Icon/SortIcon";
import AddTodoBlock from "../components/todo/AddTodoBlock";

// Actions
import { getUserTodos, sortTodo } from "../actions/todoActions";

// Styling
import styled from "styled-components";
import CreateTodo from "../components/todo/CreateTodo";
import Profile from "./Profile";

// Animations
import { AnimateSharedLayout, motion } from "framer-motion";
import {
  AnimateTodoContainer,
  TodoObjZoom,
} from "../components/animations/variant";

const Home = () => {
  const { todos, loading } = useSelector((state) => state.todo);
  const [sortBy, setSortBy] = useState("createdAt");
  const [ascending, setAscending] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation();
  const profileOrTodo = location.pathname.split("/")[1];
  const pathId = location.pathname.split("/")[2];
  const history = useHistory();

  const handleCreateTodo = () => {
    history.push("/todo/add");
  };
  const handleProfile = () => {
    history.push("/profile");
  };

  const handleSort = () => {
    setAscending(!ascending);
  };

  useEffect(() => {
    dispatch(getUserTodos());
    dispatch(sortTodo(sortBy, ascending));
    // eslint-disable-next-line
  }, []);

  const onSortByChange = (e) => {
    setSortBy(e.target.value);
  };
  useEffect(() => {
    dispatch(sortTodo(sortBy, ascending));
    // eslint-disable-next-line
  }, [ascending, sortBy]);

  return (
    <HomePage>
      <HomeContainer>
        <TitleContainer>
          <UserIcon onClickHandler={handleProfile} />
          <HomeTitle>Tasks</HomeTitle>
          <SortDiv>
            <SortBy>Sort by:</SortBy>
            <SelectDiv>
              <SortSelect value={sortBy} onChange={onSortByChange}>
                <option value="dueDate">Due Date</option>
                <option value="createdAt">Created At</option>
              </SortSelect>
            </SelectDiv>
            <SortIcon active={ascending} onClickHandler={handleSort} />
          </SortDiv>
        </TitleContainer>
        {!loading && profileOrTodo ? (
          profileOrTodo === "profile" ? (
            <Profile />
          ) : profileOrTodo === "todo" ? (
            pathId === "add" ? (
              <CreateTodo sortBy={sortBy} ascending={ascending} />
            ) : (
              <TodoDetail todos={todos} pathId={pathId} />
            )
          ) : (
            ""
          )
        ) : (
          ""
        )}

        <TodoBackground>
          <AnimateSharedLayout type="crossfade">
            <TodoContainer initial="show" variants={AnimateTodoContainer}>
              {!loading
                ? todos.length > 0
                  ? todos.map(
                      (todoObj) =>
                        !todoObj.done && (
                          <TodoObjBlockView
                            done={false}
                            data={todoObj}
                            key={todoObj._id}
                          />
                        )
                    )
                  : ""
                : ""}
              <AddTodoBlock handleOnClick={handleCreateTodo} />
              {!loading
                ? todos.length > 0
                  ? todos.map(
                      (todoObj) =>
                        todoObj.done && (
                          <TodoObjBlockView
                            done={true}
                            data={todoObj}
                            key={todoObj._id}
                          />
                        )
                    )
                  : ""
                : ""}
            </TodoContainer>
          </AnimateSharedLayout>
        </TodoBackground>
      </HomeContainer>
    </HomePage>
  );
};

const HomePage = styled.div`
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.bgLinear};
`;

const HomeContainer = styled.div`
  max-height: 80%;
  width: 80%;
`;
const TodoBackground = styled.div`
  height: auto;
  background: #ffffff;
  border-radius: 1rem;
  margin-top: 1rem;
  padding: 0rem 1rem 1rem 1rem;
`;
const HomeTitle = styled.h1`
  font-weight: ${(props) => `${props.theme.fontWeightBold}`};
  font-size: ${(props) => `${props.theme.fontSizeBold}rem`};
  display: inline-block;
  margin: 1rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TodoContainer = styled(motion.div)`
  max-height: 40rem;
  height: auto;
  padding-right: 0.8rem;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0.5rem;
    border-radius: 1rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.color_1};
    border-radius: 1rem;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
    margin: 1rem;
    border-radius: 1rem;
  }
`;

const SortSelect = styled.select`
  height: auto;
  border: none;
  appearance: none;
  outline: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-weight: 500;
  font-size: 1rem;
  display: grid;
  grid-template-areas: "select";
  background: transparent;
  cursor: pointer;
  font-weight: ${(props) => `${props.theme.fontWeightMedium}`};
  font-size: ${(props) => `${props.theme.fontSizeLight}rem`};
  z-index: 1;
`;
const SortDiv = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const SortBy = styled.p`
  margin: 0rem 1rem;
  font-weight: ${(props) => `${props.theme.fontWeightMedium}`};
  font-size: ${(props) => `${props.theme.fontSizeMedium}rem`};
  width: fill-available;
`;
const SelectDiv = styled.div`
  width: 100%;
  min-width: 12rem;
  max-width: 15rem;
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff6f3;
  display: grid;
  grid-template-areas: "select";
  align-items: center;
  position: relative;
  &:after {
    content: "";
    width: 0.8em;
    height: 0.5em;
    background-color: black;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    justify-self: end;
  }
  select,
  &:after {
    grid-area: select;
  }
`;

export default Home;
