import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/thunks/userThunk";
import FormContainer from "./RegisterFormStyle";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const blannkFields = {
    name: "",
    username: "",
    password: "",
    image: "",
  };
  const [formData, setFormData] = useState(blannkFields);
  const isInvalid =
    formData.username === "" ||
    formData.password === "" ||
    formData.name === "" ||
    formData.image === "";

  const changeData = (event: any) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const changeFile = (event: any) => {
    const test = event.target.files;
    setFormData({ ...formData, image: test[0] });
  };

  const submitForm = (event: any) => {
    event.preventDefault();
    dispatch(registerThunk(formData));
  };

  return (
    <FormContainer
      className="form-container"
      onSubmit={submitForm}
      autoComplete="off"
      noValidate
    >
      <ul>
        <li>
          <h1 className="title">Register</h1>
          <p className="userReg">{formData.username} uwu?</p>
        </li>
        <li>
          <label title="name" htmlFor="name">
            name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={changeData}
            required
          />
        </li>
        <li>
          <label title="username" htmlFor="username">
            username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={changeData}
            required
          />
        </li>
        <li>
          <label title="password" htmlFor="password">
            password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={changeData}
            autoComplete="on"
            required
          />
        </li>
        <li>
          <label htmlFor="image">profile picture</label>
          <input
            className="custom-file-input"
            type="file"
            id="image"
            name="image"
            placeholder="img"
            required
            accept=".png, .jpg, .webp"
            onChange={changeFile}
          />
        </li>
        <li>
          <button type="submit" className="button" disabled={isInvalid}>
            Sign Up
          </button>
          <p>
            ¿Have an account? <Link href="/login">Sign In now</Link>
          </p>
        </li>
      </ul>
    </FormContainer>
  );
};

export default RegisterForm;
