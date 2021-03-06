import jwtDecode from "jwt-decode";
import axios, { AxiosRequestConfig } from "axios";
import { Dispatch } from "redux";
import {
  loadProfileAction,
  loadUsersAction,
  loginAction,
  registerAction,
} from "../actions/actionsCreator";
import Router, { useRouter } from "next/router";
import toastMessage from "../../utils/toastNotify";

export const userThunk =
  (user: any, router: any) => async (dispatch: Dispatch) => {
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
      return toastMessage("The username or password is incorrect ๐งจ");
    }
    const token = await response.json();
    const { username }: any = await jwtDecode(token.token);
    localStorage.setItem("token", token.token);
    dispatch(loginAction({ username, token: token.token }));
    router.push("/");
    toastMessage("Logged in ๐");
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

  const response = await axios.post(url, data, config);
  try {
    dispatch(registerAction(response.data));
    toastMessage("User Registered ๐");
    Router.push("/login");
  } catch (error) {
    toastMessage("This username alredy exist");
    return { errorCode: "400" };
  }
};

export const loadUsersThunk = (token: any) => async (dispatch: Dispatch) => {
  const url = `${process.env.NEXT_PUBLIC_ANIME4ME}users/allusers`;

  const config: AxiosRequestConfig<any> = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(url, config);

  dispatch(loadUsersAction(response.data));
};

export const loadProfileThunk = (token: any) => async (dispatch: Dispatch) => {
  const url = `${process.env.NEXT_PUBLIC_ANIME4ME}users/user`;

  const config: AxiosRequestConfig<any> = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(url, config);
  dispatch(loadProfileAction(response.data.actualUser));
};
