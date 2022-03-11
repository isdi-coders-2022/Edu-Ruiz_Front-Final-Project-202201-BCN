import { combineReducers } from "redux";
import animeReducer from "./animeReducer";

const rootReducer = combineReducers({
  animes: animeReducer,
});

export default rootReducer;
