import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { userThunk } from "../../redux/thunks/userThunk";

const FormContainer = styled.form`
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff006a;
  border-radius: 5px;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.64);
  height: 400px;
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
        margin-bottom: 10px;
        color: #000;
        font-family: "Readex Pro";
      }
      & input {
        font-family: "Readex Pro";
        background-color: #000;
        border: 1px solid #000;
        padding: 10px;
        color: #fff;
        width: 100%;
        outline: none;
      }
      & button {
        width: 100%;
        background-color: #0009;
        padding: 10px;
        border: 1px solid #000;
        list-style: none;
        text-decoration: none;
        color: #fff;
      }
      & button:active {
        background-color: #000;
      }
      & p {
        width: 244px;
        font-family: "Readex Pro";
        margin-top: 10px;
        font-size: 13px;
        color: #fff;
        & .link {
          color: #5765f2;
          text-decoration: none;
        }
      }
    }
  }
`;

const LoginForm = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  const initialFormData = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(userThunk(formData, router));
  };

  const isFilled = formData.username !== "" && formData.password !== "";

  return (
    <FormContainer
      data-testid="login-form"
      className="form-container"
      onSubmit={handleSubmit}
      autoComplete="off"
      noValidate
    >
      <ul>
        <li>
          <h1 className="title">Login</h1>
          <p className="userReg">{formData.username} uwu!</p>
        </li>
        <li>
          <label title="username" htmlFor="username">
            username:
          </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            required
          />
        </li>
        <li>
          <label title="password" htmlFor="password">
            password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            autoComplete="on"
            required
          />
        </li>
        <li>
          <button type="submit" className="button" disabled={!isFilled}>
            Sign In
          </button>
          <p>
            ¿You need an account? <Link href="/register">Sign Up</Link>
          </p>
        </li>
      </ul>
    </FormContainer>
  );
};

export default LoginForm;
