import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, Store } from "redux";
import rootReducer from "../reducer";
import { createWrapper, Context } from "next-redux-wrapper";

const makeStore = (context: Context) =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper<Store>(makeStore);
