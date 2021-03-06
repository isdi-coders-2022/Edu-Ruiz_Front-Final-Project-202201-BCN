import { HYDRATE } from "next-redux-wrapper";
import actionsTypes from "../actions/actionsTypes";

const singleAnimeReducer = (currentAnime: any = {}, action: any = {}) => {
  let animeDetails;

  switch (action.type) {
    case HYDRATE:
      return { ...action.payload.anime };
    case actionsTypes.loadAnime:
      animeDetails = { ...action.anime };
      break;
    case actionsTypes.updateAnime:
      animeDetails = { ...action.anime };
      break;
    default:
      animeDetails = { ...currentAnime };
  }

  return animeDetails;
};

export default singleAnimeReducer;
