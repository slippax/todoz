import { combineReducers } from "redux";
import todoReducer from "./todo";
const allReducers = combineReducers({
  todos: todoReducer,
});

export default allReducers;
