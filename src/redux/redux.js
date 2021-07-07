import {combineReducers, createStore} from "redux";
import HeaderReducer from "./HeaderReudcer";
import CatalogueReducer from "./CatalogueReducer";

let reducers = combineReducers({
  header: HeaderReducer,
  catalogue: CatalogueReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;