import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser, deleteUser } from "../actions/authActions";

const Home = () => {
  // const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  const handleDelete = () => {
    dispatch(deleteUser());
  };

  return (
    <div>
      <h1>home</h1>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleDelete}>Delete This Account</button>
    </div>
  );
};

export default Home;
