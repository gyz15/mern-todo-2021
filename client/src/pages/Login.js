// TODO Split into component
// TODO Themed colour which has config
// TODO styling according to figma
// TODO do not have an account, register here
// Packages
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation, Link } from "react-router-dom";

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
      <MainContainer>
        <InfoContainer>
          <Info>
            <Logo size={150} />
            <LoginParagraph>
              MERN Todo App 2021 helps you to record your daily todos and notify
              you every hour
            </LoginParagraph>
          </Info>
        </InfoContainer>
        <LoginContainer>
          <h1>Login</h1>
          <LoginFormContainer>
            <LoginForm />
            <Link to="/register">
              Do not have an account? Click here to register &#8599;
            </Link>
          </LoginFormContainer>
        </LoginContainer>
      </MainContainer>
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
  padding: 1.5rem;
  display: flex;

  flex-direction: column;
  background: ${(props) => props.theme.color_1};
  border-radius: 2.5rem;
  a {
    display: inline-block;
    margin: 0.5rem 0rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoginFormContainer = styled.div`
  form {
    label {
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
`;

const InfoContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

// TODO Main container flex direction change if screen width change
const MainContainer = styled.div`
  width: 75vw;
  display: flex;
`;

const LoginParagraph = styled.p`
  font-weight: 500;
  font-size: 1.5rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    display: block;
    width: 60%;
  }
`;
