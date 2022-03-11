import { Dispatch } from "redux";
import loadAnimesAction from "../actions/actionsCreator";

export const loadAnimeListThunk = async (dispatch: Dispatch) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_ANIME4ME}animes/`, {
    method: "GET",
  });
  const animeList = await response.json();
  const animeArray = animeList.animes;

  dispatch(loadAnimesAction(animeArray));
};
