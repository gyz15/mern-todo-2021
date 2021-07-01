import React from "react";
import Cross from "../components/Icon/Cross";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { logoutUser, deleteUser } from "../actions/authActions";
import { PageBackground, Taskbar } from "../components/style/Components";
import { motion } from "framer-motion";
import { ObjectZoom } from "../components/animations/variant";

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
    <PageBackground className="profile" onClick={quitPage}>
      <ProfileContainer>
        <Taskbar>
          <h2>Profile</h2>
          <Cross onClickHandler={quitHandler} right={true} />
        </Taskbar>
        <ProfileButton
          variants={ObjectZoom}
          whileHover="focused"
          whileFocus="focused"
          whileTap="pressed"
          onClick={handleLogout}
        >
          Logout
        </ProfileButton>
        <ProfileButton
          variants={ObjectZoom}
          whileHover="focused"
          whileFocus="focused"
          whileTap="pressed"
          danger
          onClick={handleDelete}
        >
          Delete this Account
        </ProfileButton>
      </ProfileContainer>
    </PageBackground>
  );
};

export default Profile;

const ProfileContainer = styled.div`
  min-width: 15rem;
  max-width: 30rem;
  min-height: 10rem;
  max-height: 40rem;
  background-color: #edf7fe;
  padding: 2rem;
  border-radius: 1rem;
`;
const ProfileButton = styled(motion.button)`
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
