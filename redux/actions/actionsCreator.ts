import Anime from "../../interfaces/Anime";
import TypeOfAction from "../../interfaces/TypeOfAction";
import actionsTypes from "./actionsTypes";

export const loadAnimesAction = (animes: Anime[]): TypeOfAction => ({
  type: actionsTypes.loadAnimes,
  payload: animes,
});

export const deleteAnimeAction = (id: string): TypeOfAction => ({
  type: actionsTypes.deleteAnime,
  payload: id,
});

export const createAnimeAction = (newAnime: Object) => ({
  type: actionsTypes.createAnime,
  newAnime,
});
