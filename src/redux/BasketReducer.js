import {ToggleStatusTC} from "./NotificationReducer";

const ADD_PRODUCTS = "BASKET/ADD_PRODUCTS";
const DELETE_PRODUCTS = "BASKET/DELETE_PRODUCTS";
const DELETE_ONE_PRODUCTS = "BASKET/DELETE_ONE_PRODUCTS";
const CLEAR_BASKET = "BASKET/CLEAR_BASKET";

let initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};


if(localStorage.getItem("alel/basket")) {
  initialState = JSON.parse(localStorage.getItem("alel/basket"));
} else {
  localStorage.setItem("alel/basket", JSON.stringify(initialState));
}



const BasketReducer = (state = JSON.parse(localStorage.getItem("alel/basket")), action) => {
  let copyState;
  switch (action.type) {
    case ADD_PRODUCTS:
      copyState = {...state};
      if (copyState.products.some(el => (el.id === action.id) && (el.weight === action.weight))) {
        copyState.products.forEach((el) => {
          if ((el.id === action.id) && (el.weight === action.weight)) {
            el.quantity++;
            el.sum += +el.price;
          }
        });
      } else {
        copyState.products.push({
          id: action.id,
          name: action.name,
          quantity: action.quantity,
          photo: action.photo,
          weight: action.weight,
          price: action.price,
          sum: +action.sum
        });
      }
      copyState.totalQuantity++;
      copyState.totalPrice += +action.price;
      localStorage.setItem("alel/basket", JSON.stringify(copyState));

      return copyState;
    case DELETE_ONE_PRODUCTS:
      copyState = {...state};
      if (copyState.products.some(el => (el.id === action.id) && (el.weight === action.weight))) {
        copyState.products.forEach((el) => {
          if ((el.id === action.id) && (el.weight === action.weight) && (el.quantity > 1)) {
            el.quantity--;
            el.sum -= +el.price;
            copyState.totalQuantity--;
            copyState.totalPrice -= +action.price;
          }
        });
      }
      localStorage.setItem("alel/basket", JSON.stringify(copyState));
      return copyState;
    case DELETE_PRODUCTS:
      copyState = {...state};
      copyState.products = state.products.filter(el => !(el.id === action.id && el.weight === action.weight));
      copyState.totalPrice = state.totalPrice - +state.products.find(el => (el.id === +action.id && el.weight === action.weight)).sum;
      copyState.totalQuantity = state.totalQuantity - +state.products.find(el => (el.id === +action.id && el.weight === action.weight)).quantity;
      localStorage.setItem("alel/basket", JSON.stringify(copyState));
      return copyState;
    case CLEAR_BASKET:
      copyState = {...state}
      copyState = {
        products: [],
        totalQuantity: 0,
        totalPrice: 0,
      };
      localStorage.clear();
      return copyState;
    default:
      localStorage.setItem("alel/basket", JSON.stringify(state));
      return state;
  }
}

export const addProductsAC = ({id, name, quantity, photo, weight, price, sum}) => ({
  type: ADD_PRODUCTS,
  id,
  name,
  quantity,
  photo,
  weight,
  price,
  sum
});
export const deleteProductsAC = (id, weight) => ({type: DELETE_PRODUCTS, id, weight});
export const deleteOneProductAC = (id, weight, price) => ({type: DELETE_ONE_PRODUCTS, id, weight, price});
export const clearBasketAC = () => ({type: CLEAR_BASKET});


export default BasketReducer;