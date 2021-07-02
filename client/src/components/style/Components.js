import styled from "styled-components";
import { motion } from "framer-motion";

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

export const PageBackground = styled(motion.div)`
  z-index: 2;
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

// Motion here enter
export const CreateEditContainer = styled(motion.div)`
  z-index: 3;
  min-width: 25rem;
  max-width: 30rem;
  min-height: 20rem;
  max-height: 40rem;
  background-color: #edf7fe;
  padding: 2rem;
  border-radius: 1rem;
`;

export const Taskbar = styled.div`
  width: 100%;
  display: flex;
  h2 {
    font-size: 2rem;
    padding: 0rem;
    font-weight: 550;
  }
`;
