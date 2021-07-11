import {combineReducers, createStore} from "redux";
import HeaderReducer from "./HeaderReudcer";
import CatalogueReducer from "./CatalogueReducer";
import ProductsReducer from "./ProductsReducer";
import ProductsFiltersReducer from "./ProductsFiltersReducer";


let reducers = combineReducers({
  header: HeaderReducer,
  catalogue: CatalogueReducer,
  products: ProductsReducer,
  productsFilter: ProductsFiltersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;