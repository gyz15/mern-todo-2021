// @import Packages
import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";

// @import Actions
import { logoutUser, deleteUser } from "../actions/authActions";

// @import Components
import Cross from "../components/Icon/Cross";
import {
  PageBackground,
  Taskbar,
  PopUpContainer,
} from "../components/style/Components";

// @import Animation
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
    if (e.target.classList.contains("background")) {
      history.push("/");
    }
  };
  const quitHandler = () => {
    history.push("/");
  };
  return (
    <PageBackground className="background" onClick={quitPage}>
      <PopUpContainer>
        <Taskbar>
          <h2>Profile</h2>
          <Cross onClickHandler={quitHandler} right={true} />
        </Taskbar>
        <ProfileButton
          variants={ObjectZoom}
          whileHover="focused"
          whileTap="pressed"
          onClick={handleLogout}
        >
          Logout
        </ProfileButton>
        <ProfileButton
          variants={ObjectZoom}
          whileHover="focused"
          whileTap="pressed"
          danger={true}
          onClick={handleDelete}
        >
          Delete this Account
        </ProfileButton>
      </PopUpContainer>
    </PageBackground>
  );
};

export default Profile;

const ProfileButton = styled(motion.button)`
  margin-top: 1rem;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: ${(props) => `${props.theme.fontSizeLight}rem`};
  display: block;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.fontColorLight};
  width: auto;
  position: left;
  background: ${(props) => (props.danger ? "red" : props.theme.actionLinear)};
  cursor: pointer;
  text-align: left;
`;
