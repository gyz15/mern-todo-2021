// Packages
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";

// Components
import RegisterForm from "../components/auth/RegisterForm";

const Register = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const history = useHistory();
  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated, history]);
  return (
    <RegisterPage>
      <RegisterContainer>
        <h1>Register</h1>
        <RegisterForm />
        <Link to="/login">Already have an account? Click here to login.</Link>
      </RegisterContainer>
    </RegisterPage>
  );
};

const RegisterPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.bgLinear};
`;

const RegisterContainer = styled.div`
  width: 40%;
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  border-radius: 2.5rem;
  background: ${(props) => props.theme.color_1};
  form {
    label {
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
  a {
    display: inline-block;
    margin: 0.5rem 0rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export default Register;
