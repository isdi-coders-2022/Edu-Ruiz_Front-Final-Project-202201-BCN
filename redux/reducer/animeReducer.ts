import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import { Animes } from "../../interfaces/AnimeProps";
import TypeOfAction from "../../interfaces/TypeOfAction";
import actionsTypes from "../actions/actionsTypes";

const animeReducer = (animeList: Animes = [], action: AnyAction) => {
  let newAnime: Animes;
  switch (action.type) {
    case HYDRATE:
      return [...(action as AnyAction).payload.animes];
    case actionsTypes.loadAnimes:
      if (action.payload) {
        newAnime = [...action.payload];
      } else {
        newAnime = [...animeList];
      }
      break;
    case actionsTypes.deleteAnime:
      newAnime = animeList.filter(
        (anime) => anime.id !== (action as TypeOfAction).payload
      );
      break;
    case actionsTypes.createAnime:
      newAnime = [...animeList, action.newAnime];

      break;
    default:
      newAnime = [...animeList];
  }
  return newAnime;
};

export default animeReducer;
