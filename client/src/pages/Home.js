// TODO Sort function
// Packages
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

// Components
import TodoDetail from "../components/todo/TodoDetail";
import TodoObjBlockView from "../components/todo/TodoObjBlockView";
import Spinner from "../components/common/Spinner";

// Actions
import { logoutUser, deleteUser } from "../actions/authActions";
import { getUserTodos, sortTodo } from "../actions/todoActions";

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
    <div>
      <h1>home</h1>
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
      <div className="todos-container">
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
      </div>
    </div>
  );
};

export default Home;
