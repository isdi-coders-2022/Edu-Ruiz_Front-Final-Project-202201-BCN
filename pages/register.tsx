import styled from "styled-components";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const RegisterCont = styled.section`
  height: 100vh;
  background-color: #1a0f18;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Register = () => {
  return (
    <RegisterCont>
      <RegisterForm />
    </RegisterCont>
  );
};

export default Register;
