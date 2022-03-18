import { combineReducers } from "redux";
import animeReducer from "./animeReducer";
import singleAnimeReducer from "./singleReducer";

const rootReducer = combineReducers({
  animes: animeReducer,
  anime: singleAnimeReducer,
});

export default rootReducer;
