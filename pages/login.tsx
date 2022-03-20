import styled from "styled-components";
import LoginForm from "../components/LoginForm/LoginForm";

const LoginCont = styled.section`
  height: 100vh;
  background-color: #1a0f18;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Login = () => {
  return (
    <LoginCont>
      <LoginForm />
    </LoginCont>
  );
};

export default Login;
