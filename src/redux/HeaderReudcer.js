const CHANGE_LANGUAGE = "HEADER/CHANGE_LANGUAGE";
const CHANGE_CURRENT_CITY = "HEADER/CHANGE_CURRENT_CITY";

const initialState = {
    staticContent: {
      textLocation: "Местоположение:",
      textBasket: "Корзина",
      textBasketSum: "тенге.",
      textFindPlaceholder: "Что ищите?",
      textCatalogue: "Каталог продукции"
    },
    links: {
      linkPhone: "+7 (727)225 43 60",
      linkFavorites: "Избранное",
    },
    cities: ["Алматы", "Каскелен", "Караганда"],
    currentCity: "Алматы",
    favoritesItems: 5,
    basketSum: 7700,
    basketProducts: 4,
    catalogueMenu: ["Цыпленок бройлера", "Цыплята табака", "Окорочка", "Бедро", "Голень", "Крылышки", "Филе", "Грудинка", "Показать все"],
    linksMenu: [
      {
        title: "Главная",
        link: "/"
      },
      {
        title: "О нас",
        link: "/about"
      },
      {
        title: "Сертификаты",
        link: "/certificates"
      },
      {
        title: "Рецепты",
        link: "/recipes"
      },
      {
        title: "Где купить?",
        link: "/buyit"
      },
      {
        title: "Контакты",
        link: "/contacts"
      },
    ],
    languages: ["Рус", "Қаз"],
    currenLang: "Рус"
}

const HeaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_CITY:
      return {
        ...state,
        currentCity: action.city,
      };
    case CHANGE_LANGUAGE:
      return {
        ...state,
        currenLang: action.lang,
      };
    default:
      return state;
  }
}

export const changeLanguageAC = (lang) => ({type: CHANGE_LANGUAGE, lang});
export const changeCurrentCityAC = (city) => ({type: CHANGE_CURRENT_CITY, city})


export default HeaderReducer;