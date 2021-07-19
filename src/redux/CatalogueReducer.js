import {catalogue} from "../api/api";

const SET_CATEGORY = "CATALOGUE/SET_CATEGORY";
const SET_CURRENT_CATEGORY = "CATALOGUE/SET_CURRENT_CATEGORY";

const initialState = {
  staticContent: {
    textLinkNav: "Главная",
    textSortMenu: "Сортировать по",
    textProducts: "товаров",
    textFilters: "Фильтр",
    textSortingPopular: "По популярности",
    textSortingHigh: "По возрастанию цены",
    textSortingLow: "По убыванию цены",
    textSortingNew: "По новизне"
  },
  product: {
    title: "Мясо птицы",
    quantity: 6
  },
  category: [],
  currentCategory: []
};

const CatalogueReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_CATEGORY:
      return{
        ...state,
        category: action.category,
      }
    case SET_CURRENT_CATEGORY:
      return{
        ...state,
        currentCategory: action.category
      }
    default:
      return state
  }
};

const setCategoryAC = (category) => ({type: SET_CATEGORY, category});
const setCurrenCategoryAC = (category) => ({type: SET_CURRENT_CATEGORY, category});


export const getCategoryTC = () => async (dispatch) => {
  let data = await catalogue.getCategory();
  dispatch(setCategoryAC(data.data));
};

export const getCurrentCategoryTC = (categoryId) => async (dispatch) => {
  let data = await catalogue.getCurrentCategory(categoryId);
  dispatch(setCurrenCategoryAC(data.data));
}


export default CatalogueReducer;