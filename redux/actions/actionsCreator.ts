import Anime from "../../interfaces/Anime";
import TypeOfAction from "../../interfaces/TypeOfAction";
import actionsTypes from "./actionsTypes";

const loadAnimesAction = (animes: Anime[]): TypeOfAction => ({
  type: actionsTypes.loadAnimes,
  payload: animes,
});

export default loadAnimesAction;
