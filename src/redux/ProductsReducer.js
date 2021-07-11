const TOGGLE_LIKE = "CATALOGUE/TOGGLE_LIKE";
const CHANGE_WEIGHT = "CATALOGUE/CHANGE_WEIGHT";

const initialState = {
  staticContent: {
    textCartButton: "В корзину за",
  },
  products: [
    {
      id: 0,
      title: "Куриное бедро",
      weight: [
        {
          active: true,
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
}

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
}

export const toggleLikeAC = (id) => ({type: TOGGLE_LIKE, id});
export const changeWeightAC = (productId, weightId) => ({type: CHANGE_WEIGHT, productId, weightId});

export default ProductsReducer;