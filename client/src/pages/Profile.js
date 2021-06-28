import React from "react";
import Cross from "../components/Icon/Cross";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { logoutUser, deleteUser } from "../actions/authActions";
const Profile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = () => {
    history.push("/");
    dispatch(logoutUser());
  };
  const handleDelete = () => {
    dispatch(deleteUser());
  };
  const quitPage = (e) => {
    if (e.target.classList.contains("profile")) {
      history.push("/");
    }
  };
  const quitHandler = () => {
    history.push("/");
  };
  return (
    <ProfilePage className="profile" onClick={quitPage}>
      <ProfileContainer>
        <Taskbar>
          <h2>Profile</h2>
          <Cross onClickHandler={quitHandler} right={true} />
        </Taskbar>
        <ProfileButton onClick={handleLogout}>Logout</ProfileButton>
        <ProfileButton danger onClick={handleDelete}>
          Delete this Account
        </ProfileButton>
      </ProfileContainer>
    </ProfilePage>
  );
};

export default Profile;

const ProfilePage = styled.div`
  position: fixed;
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ProfileContainer = styled.div`
  min-width: 15rem;
  max-width: 30rem;
  min-height: 10rem;
  max-height: 40rem;
  background-color: #edf7fe;
  padding: 2rem;
  border-radius: 1rem;
`;
const Taskbar = styled.div`
  width: 100%;
  display: flex;
  h2 {
    font-size: 2rem;
    padding: 0rem;
    font-weight: 550;
  }
`;

const ProfileButton = styled.button`
  margin-top: 1rem;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.2rem;
  display: block;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.fontColorLight};
  width: auto;
  position: left;
  background: ${(props) => (props.danger ? "red" : props.theme.actionLinear)};
  &:hover {
    cursor: pointer;
  }
`;
