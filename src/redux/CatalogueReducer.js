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
};

const CatalogueReducer = (state = initialState, action) => {
  switch(action.type){
    default:
      return state
  }
}


export default CatalogueReducer;