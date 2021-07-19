import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import HeaderReducer from "./HeaderReudcer";
import CatalogueReducer from "./CatalogueReducer";
import ProductsReducer from "./ProductsReducer";
import ProductsFiltersReducer from "./ProductsFiltersReducer";
import BasketReducer from "./BasketReducer";
import OrderingReducer from "./OrderingReducer";


let reducers = combineReducers({
  header: HeaderReducer,
  catalogue: CatalogueReducer,
  products: ProductsReducer,
  productsFilter: ProductsFiltersReducer,
  basket: BasketReducer,
  ordering: OrderingReducer
});

let store = createStore(reducers,  applyMiddleware(thunk));

window.store = store;

export default store;