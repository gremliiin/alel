import {ordering} from "../api/api";
import {clearBasketAC} from "./BasketReducer";

const CHANGE_STREET = "ORDERING/CHANGE_STREET";
const CHANGE_HOUSE = "ORDERING/CHANGE_HOUSE";
const CHANGE_FLAT = "ORDERING/CHANGE_FLAT";
const CHECK_METHOD_DELIVERY = "ORDERING/CHECK_METHOD_DELIVERY";
const CHECK_CONTACTS_INFO = "ORDERING/CHECK_CONTACTS_INFO";
const CHANGE_NAME = "ORDERING/CHANGE_NAME";
const CHANGE_PHONE = "ORDERING/CHANGE_PHONE";
const CHANGE_EMAIL = "ORDERING/CHANGE_EMAIL";
const CHANGE_DELIVERY_DATE = "ORDERING/CHANGE_DELIVERY_DATE";
const CHANGE_METHOD_PAYMENT = "ORDERING/CHANGE_METHOD_PAYMENT";
const SET_IS_FETCHING = "ORDERING/SET_IS_FETCHING";
const SET_IS_SUBMIT = "ORDERING/SET_IS_SUBMIT"



const initialState = {
  email: "",
  name: "",
  phone: "",
  delivery_method_id: 1,
  city_id: 1,
  street: "",
  house: "",
  flat: "",
  isFetching: false,
  isSubmit: false,
  dop_info: null,
  payment_method_id: 1,
  delivery_dt: "",
  errorsMethodsDelivery: ["", "", ""],
  errorsContactsInfo: ["", "", "", ""],
  products: [],

}

const OrderingReducer = (state = initialState, action) => {
  let copyState;
  switch (action.type) {
    case CHANGE_STREET:
      copyState = {...state};
      if(action.value.length < 30){
        copyState.street = action.value;
      }
      return copyState;
    case CHANGE_HOUSE:
      copyState = {...state};
      if(+action.value < 9999){
        copyState.house = action.value;
      }
      return copyState;
    case CHANGE_FLAT:
      copyState = {...state};
      if(+action.value < 9999){
        copyState.flat = action.value;
      }
      return copyState;
    case CHANGE_NAME:
      copyState = {...state};
      if(action.value.length < 20){
        copyState.name = action.value;
      }
      return copyState;
    case CHANGE_PHONE:
      copyState = {...state};
      if(action.value.length < 12){
        copyState.phone = action.value;
      }
      return copyState;
    case CHANGE_EMAIL:
      copyState = {...state};
      if(action.value.length < 50){
        copyState.email = action.value;
      }
      return copyState;
    case CHANGE_DELIVERY_DATE:
      copyState = {...state};
      copyState.delivery_dt = action.value;
      return copyState;
    case CHECK_METHOD_DELIVERY:
      copyState = {...state};
      if(copyState.street.length < 2 || copyState.street.length > 30){
        copyState.errorsMethodsDelivery[0] = "некорректное название улицы";
      } else {
        copyState.errorsMethodsDelivery[0] = "";
      }
      if(copyState.flat < 1 || copyState.flat > 9999 || copyState.flat.length < 1){
        copyState.errorsMethodsDelivery[2] = "некорректный номер квартиры";
      } else {
        copyState.errorsMethodsDelivery[2] = "";
      }
      if (copyState.house < 1 || copyState.house > 9999 || copyState.house.length < 1){
        copyState.errorsMethodsDelivery[1] = "некорректный номер дома";
      } else {
        copyState.errorsMethodsDelivery[1] = "";
      }
      copyState.delivery_method_id = action.id;
      return copyState;
    case CHECK_CONTACTS_INFO:
      copyState = {...state};
      if(copyState.name.length < 2 || copyState.name.length > 20){
        copyState.errorsContactsInfo[0] = "Ошибка: имя должно состоять из не менее 2-ух символов и не более 20-ти";
      } else {
        copyState.errorsContactsInfo[0] = "";
      }
      if(String(copyState.phone).length !== 11 ){
        copyState.errorsContactsInfo[1] = "Ошибка: номер телефона должен быть 11 символов";
      } else {
        copyState.errorsContactsInfo[1] = "";
      }
      if (copyState.email.length < 9 || copyState.email.length > 100){
        copyState.errorsContactsInfo[2] = "Ошибка: адрес эл. почты должен быть не менее 9 символов";
      } else {
        copyState.errorsContactsInfo[2] = "";
      }
      if (copyState.delivery_dt.trim().length < 1){
        copyState.errorsContactsInfo[3] = "Ошибка: дата не может быть пустой";
      } else {
        copyState.errorsContactsInfo[3] = "";
      }
      return copyState;
    case CHANGE_METHOD_PAYMENT:
      copyState = {...state};
      copyState.payment_method_id = action.id;
      return copyState;
    case SET_IS_FETCHING:
      copyState = {...state};
      copyState.isFetching = action.bool;
      return copyState;
    case SET_IS_SUBMIT:
      copyState = {...state};
      copyState.isSubmit = action.bool;
      return copyState;
    default:
      return {...state}
  }
}

export const changeStreetAC = (value) => ({type: CHANGE_STREET, value});
export const changeHouseAC = (value) => ({type: CHANGE_HOUSE, value});
export const changeFlatAC = (value) => ({type: CHANGE_FLAT, value});
export const changeNameAC = (value) => ({type: CHANGE_NAME, value});
export const changePhoneAC = (value) => ({type: CHANGE_PHONE, value});
export const changeEmailAC = (value) => ({type: CHANGE_EMAIL, value});
export const changeDeliveryDateAC = (value) => ({type: CHANGE_DELIVERY_DATE, value});
export const checkMethodDeliveryAC = (id) => ({type: CHECK_METHOD_DELIVERY, id});
export const checkContactsInfoAC = () => ({type: CHECK_CONTACTS_INFO});
export const changeMethodPaymentAC = (id) => ({type: CHANGE_METHOD_PAYMENT, id});
export const setIsFetching = (bool) => ({type: SET_IS_FETCHING, bool});
export const setIsSubmit = (bool) => ({type: SET_IS_SUBMIT, bool});

export const doCheckoutTC = (stateOrdering) => async (dispatch) => {
  let form = {
    email: stateOrdering.email,
    name: stateOrdering.name,
    phone: stateOrdering.phone,
    delivery_method_id: stateOrdering.delivery_method_id,
    city_id: stateOrdering.city_id,
    street: stateOrdering.street,
    house: stateOrdering.house,
    flat: stateOrdering.flat,
    dop_info: stateOrdering.dop_info,
    payment_method_id: stateOrdering.payment_method_id,
    delivery_dt: stateOrdering.delivery_dt,
    products: stateOrdering.products,
  };

  dispatch(setIsFetching(true));
  JSON.parse(localStorage.getItem('alel/basket')).products.forEach(el => {
    form.products.push({volume: el.weight, id: el.id});
  });


  let data = await ordering.sendBasketTo(form);
  dispatch(setIsFetching(false));
  if(data !== "error") {
    dispatch(clearBasketAC());
    dispatch(setIsSubmit(true));
    setTimeout(() => {
      dispatch(setIsSubmit(false));
    }, 10000)
  } else {

  }

}

export default OrderingReducer;