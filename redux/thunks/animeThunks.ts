import { Dispatch } from "redux";
import {
  createAnimeAction,
  deleteAnimeAction,
  loadAnimeAction,
  loadAnimesAction,
} from "../actions/actionsCreator";
import axios from "axios";
import toastMessage from "../../utils/toastNotify";

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
