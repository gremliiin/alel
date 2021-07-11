const SET_SORTING = "PRODUCTS_FILTER/SET_SORTING";
const SET_CHECK_TYPE_OF_PRODUCTS = "PRODUCTS_FILTER/SET_CHECK_TYPE_OF_PRODUCTS";
const SET_CHECK_KILOS = "PRODUCTS_FILTER/SET_CHECK_KILOS";
const CHANGE_CHOOSE_PRICES_FROM = "PRODUCTS_FILTER/CHANGE_CHOOSE_PRICES_FROM";
const CHANGE_CHOOSE_PRICES_TO = "PRODUCTS_FILTER/CHANGE_CHOOSE_PRICES_TO";
const CHANGE_CALORIE_VALUE_PRICES_FROM = "PRODUCTS_FILTER/CHANGE_CALORIE_VALUE_PRICES_FROM";
const CHANGE_CALORIE_VALUE_PRICES_TO = "PRODUCTS_FILTER/CHANGE_CALORIE_VALUE_PRICES_TO";

const initialState = {
  staticContent: {
    textTypeOfProducts: "Тип продукции",
    textChoosePrices : "Цена",
    textFrom: "от",
    textTo: "до",
    textCalorieValue: "Каллорийность",
    textKilos: "Килограмм",
    textSidebarStepbefore: "Фильтр",
    textSidebarSendBtn: "Применить"
  },
  sortMenu: [
    {title: "По популярности", selected: true},
    {title: "По возрастанию цены", selected: false},
    {title: "По убыванию цены", selected: false},
    {title: "По новизне", selected: false}
  ],
  typeOfProductsMenu: [
    {
      title: "Бедра",
      isCheck: true,
    },
    {
      title: "Голень",
      isCheck: false,
    },
    {
      title: "Крылья",
      isCheck: false,
    },
    {
      title: "Филе",
      isCheck: true,
    },
    {
      title: "Грудинка",
      isCheck: false,
    },
    {
      title: "Головы",
      isCheck: false,
    },
    {
      title: "Лапки",
      isCheck: false,
    },
  ],
  choosePrices: {
    from: 1290,
    to: 7890
  },
  calorieValue: {
    from: 184,
    to: 452
  },
  kilos: [
    {
      title: "0,7",
      isCheck: true,
    },
    {
      title: "0,9",
      isCheck: false,
    },
    {
      title: "1,5",
      isCheck: true,
    },
  ]
}

const ProductsFiltersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORTING:
      return {
        ...state,
        sortMenu: state.sortMenu.map((el, id) => {
          id === action.id ? el.selected = true : el.selected = false;
          return el;
        })
      };
    case SET_CHECK_TYPE_OF_PRODUCTS:
      return {
        ...state,
        typeOfProductsMenu: state.typeOfProductsMenu.map((el, id) => {
          el.isCheck = id === action.id ? !el.isCheck: el.isCheck;
          return el;
        }),
      };
    case SET_CHECK_KILOS:
      return {
        ...state,
        kilos: state.kilos.map((el, id) => {
          el.isCheck = id === action.id ? !el.isCheck : el.isCheck;
          return el;
        })
      };
    case CHANGE_CHOOSE_PRICES_FROM:
      return {
        ...state,
        choosePrices: {from: action.data < 0 ||
          isNaN(action.data * 2) ? 0 : action.data, to: state.choosePrices.to},
      };
    case CHANGE_CHOOSE_PRICES_TO:
      return {
        ...state,
        choosePrices: {from: state.choosePrices.from, to: action.data < 0 ||
          isNaN(action.data * 2) ? 0 : action.data},
      };
    case CHANGE_CALORIE_VALUE_PRICES_FROM:
      return {
        ...state,
        calorieValue: {from: isNaN(action.data * 1) ? 0 : action.data, to: state.calorieValue.to}
      };
    case CHANGE_CALORIE_VALUE_PRICES_TO:
      return {
        ...state,
        calorieValue: {from: state.calorieValue.from, to: isNaN(action.data * 1) ? 0 : action.data}
      };
    default:
      return state;
  }
}

export const setSortingAC = (id) => ({type: SET_SORTING, id});
export const setCheckTypeOfProductsAC = (id) => ({type: SET_CHECK_TYPE_OF_PRODUCTS, id});
export const setCheckKilosAC = (id) => ({type: SET_CHECK_KILOS, id});
export const changeChoosePricesFromAC = (data) => ({type: CHANGE_CHOOSE_PRICES_FROM, data});
export const changeChoosePricesToAC = (data) => ({type: CHANGE_CHOOSE_PRICES_TO, data});
export const changeCalorieValueFromAC = (data) => ({type: CHANGE_CALORIE_VALUE_PRICES_FROM, data});
export const changeCalorieValueToAC = (data) => ({type: CHANGE_CALORIE_VALUE_PRICES_TO, data});

export default ProductsFiltersReducer;