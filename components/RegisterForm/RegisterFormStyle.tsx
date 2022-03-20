import styled from "styled-components";

const FormContainer = styled.form`
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff006a;
  border-radius: 5px;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.64);
  padding: 30px;
  width: 50%;
  min-width: 400px;
  & ul {
    & li {
      display: flex;
      flex-direction: column;
      list-style: none;
      margin: 30px;
      width: 222px;
      & .title {
        color: #000;
        padding: 0;
        margin: 0;
        font-family: "Readex Pro";
      }
      & .userReg {
        color: #000;
        font-family: "Readex Pro";
      }
      & label {
        margin-bottom: 7px;
        color: #000;
        font-family: "Readex Pro";
      }
      & input {
        background-color: #000;
        border: 1px solid #000;
        padding: 10px;
        color: #fff;
        width: 100%;
        outline: none;
        font-family: "Readex Pro";
      }
      & button {
        width: 100%;
        background-color: #0009;
        padding: 10px;
        border: 1px solid #000;
        list-style: none;
        text-decoration: none;
        color: #fff;
        font-family: "Readex Pro";
      }
      & button:active {
        background-color: #000;
      }
      & p {
        width: 244px;
        margin-top: 10px;
        font-size: 13px;
        color: #fff;
        font-family: "Readex Pro";
        & .link {
          color: #5765f2;
          text-decoration: none;
        }
      }
    }
  }
`;

export default FormContainer;
