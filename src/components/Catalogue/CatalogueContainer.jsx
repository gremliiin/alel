import React from "react";
import {connect} from "react-redux";
import Catalogue from "./Catalogue";
import {
  changeWeightAC,
  setCheckKilosAC,
  setCheckTypeOfProductsAC,
  setSortingAC,
  toggleLikeAC
} from "../../redux/CatalogueReducer";

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
              setSorting = {this.props.setSortingAC}
              toggleLike = {this.props.toggleLikeAC}
              changeWeight = {this.props.changeWeightAC}
              setCheckTypeOfProducts = {this.props.setCheckTypeOfProductsAC}
              setCheckKilos = {this.props.setCheckKilosAC}
          />
        </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    staticContent: state.catalogue.staticContent,
    sortMenu: state.catalogue.sortMenu,
    product: state.catalogue.product,
    products: state.catalogue.products,
    typeOfProductsMenu: state.catalogue.typeOfProductsMenu,
    choosePrices: state.catalogue.choosePrices,
    calorieValue: state.catalogue.calorieValue,
    kilos: state.catalogue.kilos
  }
}

const mapDispatchToProps = {
   setSortingAC,
   toggleLikeAC,
   changeWeightAC,
   setCheckTypeOfProductsAC,
   setCheckKilosAC,
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogueContainer);