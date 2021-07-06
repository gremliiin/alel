import {combineReducers, createStore} from "redux";
import HeaderReducer from "./HeaderReudcer";

let reducers = combineReducers({
  header: HeaderReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;