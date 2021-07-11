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
import {changeWeightAC, toggleLikeAC} from "../../redux/ProductsReducer";

class CatalogueContainer extends React.Component {

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
              setSorting = {this.props.setSortingAC}
              toggleLike = {this.props.toggleLikeAC}
              changeWeight = {this.props.changeWeightAC}
              setCheckTypeOfProducts = {this.props.setCheckTypeOfProductsAC}
              setCheckKilos = {this.props.setCheckKilosAC}
              changeChoosePricesFrom = {this.props.changeChoosePricesFromAC}
              changeChoosePricesTo = {this.props.changeChoosePricesToAC}
              changeCalorieValueFrom = {this.props.changeCalorieValueFromAC}
              changeCalorieValueTo = {this.props.changeCalorieValueToAC}

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
   changeCalorieValueToAC
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogueContainer);