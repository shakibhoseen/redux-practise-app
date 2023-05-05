import { createStore } from "redux";
import counterReducer from "./counterRedux";

export const store = createStore(counterReducer)
