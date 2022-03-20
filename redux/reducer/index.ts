import { combineReducers } from "redux";
import animeReducer from "./animeReducer";
import singleAnimeReducer from "./singleReducer";
import tokenReducer from "./tokenReducer";
import usersReducer from "./userReducer";

const rootReducer = combineReducers({
  animes: animeReducer,
  anime: singleAnimeReducer,
  user: tokenReducer,
  users: usersReducer,
});

export default rootReducer;
