// @import Packages
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import styled from "styled-components";
import { AnimateSharedLayout, motion } from "framer-motion";

// @import Components
import TodoDetail from "../components/todo/TodoDetail";
import TodoObjBlockView from "../components/todo/TodoObjBlockView";
import UserIcon from "../components/Icon/UserIcon";
import SortIcon from "../components/Icon/SortIcon";
import AddTodoBlock from "../components/todo/AddTodoBlock";

// @import Actions
import { getUserTodos, sortTodo } from "../actions/todoActions";

// @import Components
import CreateTodo from "../components/todo/CreateTodo";
import Profile from "./Profile";

const Home = () => {
  const { todos, loading } = useSelector((state) => state.todo);
  const [sortBy, setSortBy] = useState("createdAt");
  const [ascending, setAscending] = useState(true);
  const [lockBackgroundPosition, setLockBakcgroundPosition] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const profileOrTodo = location.pathname.split("/")[1];
  console.log(location.pathname.split("/"));
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
    if (location.pathname.split("/")[1] !== "") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [location]);

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
      {!loading && profileOrTodo ? (
        profileOrTodo === "profile" ? (
          <Profile />
        ) : profileOrTodo === "todo" ? (
          pathId === "add" ? (
            <CreateTodo sortBy={sortBy} ascending={ascending} />
          ) : (
            <TodoDetail
              todos={todos}
              pathId={pathId}
              sortBy={sortBy}
              ascending={ascending}
            />
          )
        ) : (
          ""
        )
      ) : (
        ""
      )}
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

        <TodoBackground>
          <AnimateSharedLayout type="crossfade">
            <TodoContainer initial="show">
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
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.bgLinear};
`;

const HomeContainer = styled.div`
  max-height: 80%;
  width: 80%;
  max-width: 50rem;
  margin: 2rem 0rem;
  @media (max-width: 500px) {
    width: 90%;
  }
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
  @media (max-width: 500px) {
    display: none;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  @media (max-width: 500px) {
    scale: 0.5;
  }
`;

const TodoContainer = styled(motion.div)`
  max-height: 40rem;
  height: auto;
  overflow-y: scroll;
  overflow-x: hidden;
  @media (min-width: 600px) {
    padding-right: 0.8rem;
  }
  &::-webkit-scrollbar {
    width: 0.5rem;
    border-radius: 1rem;
    @media (max-width: 600px) {
      display: none;
    }
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
  @media (max-width: 500px) {
    /* fontSizeMiniLight */
    font-size: 1rem;
  }
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
  border: none;
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
const SortDiv = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    scale: 0.7;
  }
`;

const SortBy = styled.p`
  margin: 0rem 1rem;
  font-weight: ${(props) => `${props.theme.fontWeightMedium}`};
  font-size: ${(props) => `${props.theme.fontSizeMedium}rem`};
  width: fill-available;
  @media (max-width: 725px) {
    display: none;
  }
`;

export default Home;
