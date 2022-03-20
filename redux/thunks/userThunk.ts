import jwtDecode from "jwt-decode";
import axios, { AxiosRequestConfig } from "axios";
import { Dispatch } from "redux";
import {
  loadProfileAction,
  loadUsersAction,
  loginAction,
  registerAction,
} from "../actions/actionsCreator";
import Router from "next/router";
import toastMessage from "../../utils/toastNotify";

export const userThunk = (user: any) => async (dispatch: Dispatch) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ANIME4ME}users/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );

  if (!response.ok) {
    return toastMessage("The username or password is incorrect 🧨");
  }
  const token = await response.json();
  const { username }: any = await jwtDecode(token.token);
  localStorage.setItem("token", token.token);
  dispatch(loginAction({ username, token: token.token }));
  Router.push("/");
  toastMessage("Logged in 😎");
};

export const registerThunk = (formData: any) => async (dispatch: Dispatch) => {
  const data = new FormData();
  data.append("image", formData.image);
  data.append("name", formData.name);
  data.append("username", formData.username);
  data.append("password", formData.password);

  const url = `${process.env.NEXT_PUBLIC_ANIME4ME}users/register`;

  const config = {
    headers: { "content-type": "multipart/form-data" },
  };

  axios
    .post(url, data, config)
    .then(() => {
      dispatch(registerAction(data));
      toastMessage("User Registered 😎");
      Router.push("/login");
    })
    .catch((error) => {
      toastMessage("This username alredy exist");
      return { errorCode: "400" };
    });
};

export const loadUsersThunk = (token: any) => async (dispatch: Dispatch) => {
  const url = `${process.env.NEXT_PUBLIC_ANIME4ME}users/allusers`;

  const config: AxiosRequestConfig<any> = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  axios.get(url, config).then((response) => {
    dispatch(loadUsersAction(response.data.returnedUsers));
  });
};

export const loadProfileThunk = (token: any) => async (dispatch: Dispatch) => {
  const url = `${process.env.NEXT_PUBLIC_ANIME4ME}users/user`;

  const config: AxiosRequestConfig<any> = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  axios.get(url, config).then((response) => {
    dispatch(loadProfileAction(response.data.actualUser));
  });
};
