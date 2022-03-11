import { AnyAction } from "redux";
import { Animes } from "../../interfaces/AnimeProps";
import actionsTypes from "../actions/actionsTypes";

const animeReducer = (animeList: Animes = [], action: AnyAction) => {
  let newAnime: Animes;
  switch (action.type) {
    case actionsTypes.loadAnimes:
      if (action.payload) {
        newAnime = [...action.payload];
      } else {
        newAnime = [...animeList];
      }
      break;
    default:
      newAnime = [...animeList];
  }
  return newAnime;
};

export default animeReducer;
