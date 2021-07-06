// @import Packages
import styled from "styled-components";
import { motion } from "framer-motion";

// @desc Form button styling
// @used_in ["../auth/LoginForm","../auth/RegisterForm","../todo/CreateTodo","../todo/TodoDetail"]
export const FormButton = styled(motion.button)`
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
  background: ${(props) => props.theme.actionLinear};
  cursor: pointer;
`;

// @desc Input container styling
// @used_in ["../auth/LoginForm","../auth/RegisterForm","../todo/CreateTodo","../todo/TodoDetail"]
export const InputContainer = styled(motion.div)`
  margin: 0.5rem 0.8rem 0rem 0rem;
  label {
    display: block;
    padding-bottom: 0.2rem;
    font-weight: ${(props) => `${props.theme.fontWeightLight}`};
    font-size: ${(props) => `${props.theme.fontSizeLight}rem`};
  }
  input {
    width: 80%;
    border: none;
    font-size: ${(props) => `${props.theme.fontSizeLight}rem`};
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    &:focus {
      border: none;
      outline: none;
    }
  }
`;

// @desc Page Background styling for popup
// @used_in ["../../pages/Profile","../todo/CreateTodo","../todo/TodoDetail"]
export const PageBackground = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  z-index: 5;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

// @desc Create / Edit Container styling
// @used_in ["../todo/CreateTodo","../todo/TodoDetail"]
export const PopUpContainer = styled(motion.div)`
  z-index: 10;
  min-width: 15rem;
  max-width: 30rem;
  min-height: 10rem;
  max-height: 40rem;
  background-color: #edf7fe;
  padding: 2rem;
  border-radius: 1rem;
  @media (max-width: 500px) {
    max-width: 90%;
  }
`;

// @desc Popup Taskbar Styling
// @used_in ["../todo/CreateTodo","../todo/TodoDetail","../../pages/Profile"]
export const Taskbar = styled.div`
  width: 100%;
  display: flex;
  h2 {
    font-size: 2rem;
    padding: 0rem;
    font-weight: 550;
  }
`;
