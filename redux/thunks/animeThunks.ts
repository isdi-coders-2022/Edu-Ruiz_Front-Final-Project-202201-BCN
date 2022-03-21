import { Dispatch } from "redux";
import {
  createAnimeAction,
  deleteAnimeAction,
  loadAnimeAction,
  loadAnimesAction,
  updateAnimeAction,
} from "../actions/actionsCreator";
import axios from "axios";
import toastMessage from "../../utils/toastNotify";
import Anime from "../../interfaces/Anime";

export const loadAnimeListThunk = () => async (dispatch: Dispatch) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_ANIME4ME}animes/`, {
    method: "GET",
  });
  const animeList: any = await response.json();
  const animeArray: any = animeList.animes;

  dispatch(loadAnimesAction(animeArray));
};

export const deleteAnimeThunk = (id: string) => async (dispatch: Dispatch) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ANIME4ME}animes/${id}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) return;
  dispatch(deleteAnimeAction(id));
  toastMessage(`Anime deleted 💀`, "warning");
};

export const loadAnimeThunk = (id: string) => async (dispatch: Dispatch) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ANIME4ME}animes/${id}`,
    {
      method: "GET",
    }
  );

  const animeDetailResponse = await response.json();

  dispatch(loadAnimeAction(animeDetailResponse));
};

interface createAnimeThunkProps {
  image: File | string;
  name: string;
  autor: string;
}

export const createAnimeThunk =
  (formData: createAnimeThunkProps) => async (dispatch: Dispatch) => {
    const data = new FormData();
    data.append("image", formData.image);
    data.append("name", formData.name);
    data.append("autor", formData.autor);

    const url = `${process.env.NEXT_PUBLIC_ANIME4ME}animes/create`;

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    try {
      const response = await axios.post(url, data, config);
      const test = await dispatch(createAnimeAction(response.data));
      toastMessage(`${formData.name} is created 🤍`, "normal");
      return test;
    } catch (error) {
      return { errorCode: "400" };
    }
  };

export const updateAnimeThunk =
  (id: string, formData: Anime) => async (dispatch: Dispatch) => {
    const data = new FormData();
    data.append("image", formData.image);
    data.append("name", formData.name);
    data.append("autor", formData.autor);

    const url = `${process.env.NEXT_PUBLIC_ANIME4ME}animes/${id}`;

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    try {
      const response = await axios.patch(url, data, config);
      const test = dispatch(updateAnimeAction(response.data));
      toastMessage(`${formData.name} is updated 👺`, "normal");
      return test;
    } catch (error) {
      return { errorCode: "400" };
    }
  };
