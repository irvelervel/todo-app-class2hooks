import { createStore } from "redux";
import rootReducer from "../reducers";

export const initialState = {
  list: [],
};

export default createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
