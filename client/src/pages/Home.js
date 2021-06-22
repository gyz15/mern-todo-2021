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
          <UserIcon size={2} />
          <HomeTitle>home</HomeTitle>
        </TitleContainer>
        {!loading && pathId && <TodoDetail todos={todos} pathId={pathId} />}
        <button onClick={handleLogout}>Logout</button>
        <button onClick={handleDelete}>Delete This Account</button>
        <button onClick={handleCreateTodo}>Create a new Todo</button>
        <p>Sort by:</p>
        <select value={sortBy} onChange={onSortByChange}>
          <option value="dueDate">Due Date</option>
          <option value="createdAt">Created At</option>
        </select>
        <input
          type="checkbox"
          value={ascending}
          onChange={(e) => {
            setAscending(!ascending);
          }}
        />
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
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.bgLinear};
`;

const HomeContainer = styled.div`
  width: 80%;
`;

const HomeTitle = styled.h1`
  display: inline-block;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TodoContainer = styled.div`
  height: 500px;
  overflow-y: scroll;
`;

export default Home;
