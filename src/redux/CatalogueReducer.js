const SET_SORTING = "CATALOGUE/SET_SORTING";
const TOGGLE_LIKE = "CATALOGUE/TOGGLE_LIKE";
const CHANGE_WEIGHT = "CATALOGUE/CHANGE_WEIGHT";
const SET_CHECK_TYPE_OF_PRODUCTS = "CATALOGUE/SET_CHECK_TYPE_OF_PRODUCTS";
const SET_CHECK_KILOS = "CATALOGUE/SET_CHECK_KILOS";


const initialState = {
  staticContent: {
    textLinkNav: "Главная",
    textSortMenu: "Сортировать по",
    textCartButton: "В корзину за",
    textProducts: "товаров",
    textTypeOfProducts: "Тип продукции",
    textChoosePrices : "Цена",
    textFrom: "от",
    textTo: "до",
    textCalorieValue: "Каллорийность",
    textKilos: "Килограмм"
  },
  sortMenu: [
      {title: "По популярности", selected: true},
      {title: "По возрастанию цены", selected: false},
      {title: "По убыванию цены", selected: false},
      {title: "По новизне", selected: false}
  ],
  product: {
    title: "Мясо птицы",
    quantity: 6
  },
  products: [
    {
      id: 0,
      title: "Куриное бедро",
      weight: [
        {
          active: true,
          title: "0,7",
          price: 1290,
          isStock: true,
        },
        {
          active: false,
          title: "0,9",
          price: 1500,
          isStock: true,
        },
      ],
      isLike: false,
      isStock: false,
      textStock: "в наличии",
      textNotIsStock: "нет в наличии",
      currentWeight: "0,7",
      currentPrice: 1390,
      isNew: true,
      textIsNew: "новинка"
    },
    {
      id: 0,
      title: "Куриное бедро",
      weight: [
        {
          active: true,
          title: "0,7",
          price: 1290,
          isStock: true,
        },
        {
          active: false,
          title: "0,9",
          price: 1500,
          isStock: true,
        },
      ],
      isLike: false,
      isStock: true,
      textStock: "в наличии",
      textNotIsStock: "нет в наличии",
      currentWeight: "0,7",
      currentPrice: 1290,
      isNew: true,
      textIsNew: "новинка"
    },
    {
      id: 0,
      title: "Куриное бедро",
      weight: [
        {
          active: true,
          title: "0,7",
          price: 1290,
          isStock: true,
        },
        {
          active: false,
          title: "0,9",
          price: 1500,
          isStock: true,
        },
      ],
      isLike: false,
      isStock: true,
      textStock: "в наличии",
      textNotIsStock: "нет в наличии",
      currentWeight: "0,7",
      currentPrice: 1290,
      isNew: true,
      textIsNew: "новинка"
    },
    {
      id: 0,
      title: "Куриное бедро",
      weight: [
        {
          active: true,
          title: "0,7",
          price: 1290,
          isStock: true,
        },
        {
          active: false,
          title: "0,9",
          price: 1500,
          isStock: true,
        },
      ],
      isLike: false,
      isStock: true,
      textStock: "в наличии",
      textNotIsStock: "нет в наличии",
      currentWeight: "0,7",
      currentPrice: 1290,
      isNew: true,
      textIsNew: "новинка"
    },
    {
      id: 0,
      title: "Куриное бедро",
      weight: [
        {
          active: true,
          title: "0,7",
          price: 1290,
          isStock: true,
        },
        {
          active: false,
          title: "0,9",
          price: 1500,
          isStock: true,
        },
      ],
      isLike: false,
      isStock: true,
      textStock: "в наличии",
      textNotIsStock: "нет в наличии",
      currentWeight: "0,7",
      currentPrice: 1290,
      isNew: true,
      textIsNew: "новинка"
    },
    {
      id: 0,
      title: "Куриное бедро",
      weight: [
        {
          active: true,
          title: "0,7",
          price: 1290,
          isStock: true,
        },
        {
          active: false,
          title: "0,9",
          price: 1500,
          isStock: true,
        },
      ],
      isLike: false,
      isStock: true,
      textStock: "в наличии",
      textNotIsStock: "нет в наличии",
      currentWeight: "0,7",
      currentPrice: 1290,
      isNew: true,
      textIsNew: "новинка"
    }
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
};

const CatalogueReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_SORTING:
      return {
        ...state,
        sortMenu: state.sortMenu.map((el, id) => {
          id === action.id ? el.selected = true : el.selected = false;
          return el;
        })
      };
    case TOGGLE_LIKE:
      return {
        ...state,
        products: state.products.map((el, id) => {
          el.isLike = id === action.id ? !el.isLike : el.isLike;
          return el;
        })
      };
    case CHANGE_WEIGHT:
      return {
        ...state,
        products: state.products.map((el, id) => {
          if(id === action.productId) {
            el.currentWeight = el.weight[action.weightId].title;
            el.currentPrice = el.weight[action.weightId].price;
            el.isStock = el.weight[action.weightId].isStock;
            el.weight = el.weight.map((el, id) => {
              id === action.weightId ? el.active = true : el.active = false;
              return el;
            })
          }
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
          el.selected = id === action.id ? !el.selected : el.selected;
          return el;
        })
      };
    default:
      return state
  }
}


export const setSortingAC = (id) => ({type: SET_SORTING, id});
export const toggleLikeAC = (id) => ({type: TOGGLE_LIKE, id});
export const changeWeightAC = (productId, weightId) => ({type: CHANGE_WEIGHT, productId, weightId});
export const setCheckTypeOfProductsAC = (id) => ({type: SET_CHECK_TYPE_OF_PRODUCTS, id});
export const setCheckKilosAC = (id) => ({type: SET_CHECK_KILOS, id});


export default CatalogueReducer;