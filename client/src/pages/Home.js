// TODO Fetch user todo list
// TODO delete todo, add todo, update todo
// TODO detail on home page
// Packages
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

// Components
import TodoDetail from "../components/todo/TodoDetail";

// Actions
import { logoutUser, deleteUser } from "../actions/authActions";
import { getUserTodos } from "../actions/todoActions";

const Home = () => {
  // const { isAuthenticated } = useSelector((state) => state.auth);
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
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleDelete}>Delete This Account</button>
      {pathId && <TodoDetail pathId={pathId} />}
    </div>
  );
};

export default Home;
