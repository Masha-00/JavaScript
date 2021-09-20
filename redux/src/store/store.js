import { createStore } from "redux";
import { colorsReducer } from '../reducers/ChangeColor';

export const store = createStore(colorsReducer);