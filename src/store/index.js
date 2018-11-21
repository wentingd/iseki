import { createStore } from "redux";
import reducer from "./reducers";

export default function configureStore(preloadedState) {
  return createStore(
    reducer,
    preloadedState
  );
}