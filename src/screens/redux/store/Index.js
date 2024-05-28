import { combineReducers } from "redux";
import LoginReducers from "../reducers/LoginReducers";
import CategoryReducers from "../reducers/CategoryReducers";

const allReducers = combineReducers({
  LoginReducers,
  CategoryReducers,
});

export default allReducers;
