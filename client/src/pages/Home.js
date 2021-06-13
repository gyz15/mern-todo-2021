// TODO delete todo, add todo, update todo
// TODO detail on home page
// Packages
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

// Components
import TodoDetail from "../components/todo/TodoDetail";
import TodoObjBlockView from "../components/todo/TodoObjBlockView";

// Actions
import { logoutUser, deleteUser } from "../actions/authActions";
import { getUserTodos } from "../actions/todoActions";

const Home = () => {
  const { todos, loading } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  const handleDelete = () => {
    dispatch(deleteUser());
  };

  useEffect(() => {
    dispatch(getUserTodos());
  }, [dispatch]);

  return (
    <div>
      <h1>home</h1>
      {!loading && pathId && <TodoDetail todos={todos} pathId={pathId} />}
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleDelete}>Delete This Account</button>
      <div className="todos-container">
        {!loading && todos.length > 0
          ? todos.map((todoObj) => (
              <TodoObjBlockView data={todoObj} key={todoObj._id} />
            ))
          : ""}
      </div>
    </div>
  );
};

export default Home;
