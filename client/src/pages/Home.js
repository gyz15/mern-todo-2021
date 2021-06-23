// TODO Sort function
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
import DropDownIcon from "../images/drop_down_icon.svg";

// Actions
import { logoutUser, deleteUser } from "../actions/authActions";
import { getUserTodos, sortTodo } from "../actions/todoActions";

// Styling
import styled from "styled-components";

const Home = () => {
  const { todos, loading } = useSelector((state) => state.todo);
  const [sortBy, setSortBy] = useState("createdAt");
  const [ascending, setAscending] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  const handleDelete = () => {
    dispatch(deleteUser());
  };
  const handleCreateTodo = () => {
    history.push("/todo/add");
  };

  const handleSort = () => {
    setAscending(!ascending);
  };

  useEffect(() => {
    dispatch(getUserTodos());
    dispatch(sortTodo(sortBy, ascending));
  }, []);

  const onSortByChange = (e) => {
    setSortBy(e.target.value);
    dispatch(sortTodo(sortBy, ascending));
  };
  useEffect(() => {
    dispatch(sortTodo(sortBy, ascending));
  }, [ascending]);

  return (
    <HomePage>
      <HomeContainer>
        <TitleContainer>
          <UserIcon size={2.5} />
          <HomeTitle>Tasks</HomeTitle>
          <SortDiv>
            <SortBy>Sort by:</SortBy>
            <SelectDiv>
              <SortSelect value={sortBy} onChange={onSortByChange}>
                <option value="dueDate">Due Date</option>
                <option value="createdAt">Created At</option>
              </SortSelect>
            </SelectDiv>
            <SortIcon
              size={2.5}
              active={ascending}
              onClickHandler={handleSort}
            />
          </SortDiv>
        </TitleContainer>
        {!loading && pathId && <TodoDetail todos={todos} pathId={pathId} />}
        <button onClick={handleLogout}>Logout</button>
        <button onClick={handleDelete}>Delete This Account</button>
        <button onClick={handleCreateTodo}>Create a new Todo</button>

        <TodoContainer>
          {!loading ? (
            todos.length > 0 ? (
              todos.map((todoObj) => (
                <TodoObjBlockView data={todoObj} key={todoObj._id} />
              ))
            ) : (
              ""
            )
          ) : (
            <Spinner />
          )}
        </TodoContainer>
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

const HomeTitle = styled.h1`
  display: inline-block;
  margin: 1rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TodoContainer = styled.div`
  height: 500px;
  overflow-y: scroll;
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
  z-index: 1;
`;
const SortDiv = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const SortBy = styled.p`
  margin: 0rem 1rem;
  font-weight: 500;
  width: fill-available;
`;
const SelectDiv = styled.div`
  width: 100%;
  min-width: 10rem;
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
