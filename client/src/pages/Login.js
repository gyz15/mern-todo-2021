// TODO Split into component
// TODO Themed colour which has config
// Packages
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

// Components
import LoginForm from "../components/auth/LoginForm";

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
