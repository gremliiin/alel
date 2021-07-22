import React from "react";
import {connect} from "react-redux";
import Catalogue from "./Catalogue";
import {
  changeCalorieValueFromAC, changeCalorieValueToAC,
  changeChoosePricesFromAC, changeChoosePricesToAC,
  setCheckKilosAC,
  setCheckTypeOfProductsAC,
  setSortingAC
} from "../../redux/ProductsFiltersReducer";
import {changeWeightAC, getProductsByCategoryTC, toggleLikeAC} from "../../redux/ProductsReducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getCurrentCategoryTC} from "../../redux/CatalogueReducer";
import {addProductsAC, setProductsAC} from "../../redux/BasketReducer";
import {ToggleNotificationStatusTC} from "../../redux/NotificationReducer";

class CatalogueContainer extends React.Component {

  getCategory() {
    let categoryId = this.props.match.params.categoryId;
    if(categoryId !== undefined) {
      this.props.getCurrentCategoryTC(categoryId);
      this.props.getProductsByCategoryTC(categoryId);
    }
  }

  componentDidMount() {
    this.getCategory();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
   if( prevProps.match.params.categoryId !== this.props.match.params.categoryId){
     this.getCategory();
   }
  }

  render() {
    return (
        <>
          <Catalogue
              staticContent = {this.props.staticContent}
              sortMenu = {this.props.sortMenu}
              product = {this.props.product}
              products = {this.props.products}
              typeOfProductsMenu = {this.props.typeOfProductsMenu}
              choosePrices = {this.props.choosePrices}
              calorieValue = {this.props.calorieValue}
              kilos = {this.props.kilos}
              sidebarStaticContent = {this.props.sidebarStaticContent}
              currentCategory = {this.props.currentCategory}
              setSorting = {this.props.setSortingAC}
              toggleLike = {this.props.toggleLikeAC}
              changeWeight = {this.props.changeWeightAC}
              setCheckTypeOfProducts = {this.props.setCheckTypeOfProductsAC}
              setCheckKilos = {this.props.setCheckKilosAC}
              addProducts = {this.props.addProductsAC}
              changeChoosePricesFrom = {this.props.changeChoosePricesFromAC}
              changeChoosePricesTo = {this.props.changeChoosePricesToAC}
              changeCalorieValueFrom = {this.props.changeCalorieValueFromAC}
              changeCalorieValueTo = {this.props.changeCalorieValueToAC}
              ToggleNotificationStatus = {this.props.ToggleNotificationStatusTC}

          />
        </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    staticContent: state.catalogue.staticContent,
    sortMenu: state.productsFilter.sortMenu,
    product: state.catalogue.product,
    currentCategory: state.catalogue.currentCategory,
    products: state.products,
    typeOfProductsMenu: state.productsFilter.typeOfProductsMenu,
    choosePrices: state.productsFilter.choosePrices,
    calorieValue: state.productsFilter.calorieValue,
    kilos: state.productsFilter.kilos,
    sidebarStaticContent: state.productsFilter.staticContent,

  }
}

const mapDispatchToProps = {
   setSortingAC,
   setCheckTypeOfProductsAC,
   toggleLikeAC,
   changeWeightAC,
   setCheckKilosAC,
   changeChoosePricesFromAC,
   changeChoosePricesToAC,
   changeCalorieValueFromAC,
   changeCalorieValueToAC,
   addProductsAC,
   getCurrentCategoryTC,
   getProductsByCategoryTC,
   ToggleNotificationStatusTC
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(CatalogueContainer);
