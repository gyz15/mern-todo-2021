// TODO Split into component
// TODO Themed colour which has config
// TODO styling according to figma

// Packages
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

// Components
import LoginForm from "../components/auth/LoginForm";
import Logo from "../components/Icon/Logo";

// Styling
import styled from "styled-components";

const Login = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const history = useHistory();
  const location = useLocation();

  const loginRedirectUrl =
    location.state && location.state.loginRedirectUrl !== null
      ? location.state.loginRedirectUrl
      : "/";

  useEffect(() => {
    if (isAuthenticated) {
      history.push(loginRedirectUrl);
    }
  }, [isAuthenticated]);
  return (
    <LoginPage>
      <InfoContainer>
        <Logo />
        <p>
          MERN Todo App 2021 helps you to record your daily todos and notify you
          every hour
        </p>
      </InfoContainer>
      <LoginContainer>
        <h1>Login</h1>
        <LoginFormContainer>
          <LoginForm />
        </LoginFormContainer>
      </LoginContainer>
    </LoginPage>
  );
};

export default Login;

const LoginPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.bgLinear};
`;

const LoginContainer = styled.div`
  width: 50%;
  border: 1px black solid;
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const LoginFormContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }
`;

const InfoContainer = styled.div``;
