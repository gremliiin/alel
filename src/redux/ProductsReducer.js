import {products} from "../api/api";

const TOGGLE_LIKE = "CATALOGUE/TOGGLE_LIKE";
const CHANGE_WEIGHT = "CATALOGUE/CHANGE_WEIGHT";
const SET_PRODUCTS = "CATALOGUE/SET_PRODUCTS";
const SET_IS_FETCHING = "CATALOGUE/SET_IS_FETCHING";
const SET_STATE_PRODUCTS = "CATALOGUE/SET_STATE_PRODUCTS";

const initialState = {
  staticContent: {
    textCartButton: "В корзину за",
    textIsNew: "Новинка",
    textStock: "В наличии",
    textNotIsStock: "Нет в наличии",

  },
  products: [
    {
      id: 0,
      name: "Куриное бедро",
      photos: [""],
      category_id: 3,
      description: "lalallalallalallaalalal",
      calories: 306,
      proteins: 16.5,
      fats: 14.3,
      carbohydrates: 0.09,
      volume: [0.7, 0.9],
      price: 234,
      deleted_at: null,
      created_at: "",
      updated_at: "",
    },
  ],

  stateProducts: [
    {
      price: 0,
      isActiveVolume: [true, false],
      isLike: false,
      isNew: true,
      isInStock: true,
    },
  ],
  isFetching: false,
}

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LIKE:
      return {
        ...state,
        stateProducts: state.stateProducts.map((el, id) => {
          el.isLike = id === action.id ? !el.isLike : el.isLike;
          return el;
        })
      };
    case CHANGE_WEIGHT:
      return {
        ...state,
        stateProducts: state.stateProducts.map((el, id) => {
          if(id === action.productId) {
            el.isActiveVolume = el.isActiveVolume.map((el, id) => {
              action.weightId === id ? el = true : el = false;
              return el;
            });
            el.price = (state.products[action.productId].price * (1000 * state.products[action.productId].volume[action.weightId] / 100)).toFixed(0);
            el.isInStock = true;
            el.isNew = true;
          }
          return el;
        })
      };
    case SET_PRODUCTS:
      return{
        ...state,
        products: action.products
      }
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.bool
      }
    case SET_STATE_PRODUCTS:
      return {
        ...state,
        stateProducts: action.quantity.map(() => {
          return{
            price: 0,
            isActiveVolume: [true, false],
            isLike: false,
            isNew: true,
            isInStock: true,
          }
        })
      }
    default:
      return state;
  }
}

export const toggleLikeAC = (id) => ({type: TOGGLE_LIKE, id});
export const changeWeightAC = (productId, weightId) => ({type: CHANGE_WEIGHT, productId, weightId});
export const setProducts = (products) => ({type: SET_PRODUCTS, products});
export const setIsFetching = (bool) => ({type: SET_IS_FETCHING, bool});
const setStateProductsAC = (quantity) => ({type: SET_STATE_PRODUCTS, quantity});

export const getProductsByCategoryTC = (category_id) => async (dispatch) => {

  dispatch(setIsFetching(true));
  let data = await products.getProductsByCategory(category_id);

  data.data.forEach((el) => {
    el.photos = JSON.parse(el.photos);
    el.volume = JSON.parse(el.volume);
  });
  dispatch(setStateProductsAC(data.data));
  dispatch(setProducts(data.data));
  data.data.forEach((el, id) => {
    dispatch(changeWeightAC(id, 0));
  });
  dispatch(setIsFetching(false));
}

export default ProductsReducer;