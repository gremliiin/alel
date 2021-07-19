import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {changeCurrentCityAC, changeLanguageAC} from "../../redux/HeaderReudcer";
import {getCategoryTC} from "../../redux/CatalogueReducer";

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getCategoryTC();
  }

  render() {
    return(
        <>
          <Header
              staticContent = {this.props.staticContent}
              links = {this.props.links}
              cities = {this.props.cities}
              favoritesItems = {this.props.favoritesItems}
              basketSum = {this.props.basketSum}
              catalogueMenu = {this.props.catalogueMenu}
              linksMenu = {this.props.linksMenu}
              languages = {this.props.languages}
              currenLang = {this.props.currenLang}
              basketProducts = {this.props.basketProducts}
              currentCity = {this.props.currentCity}
              category = {this.props.category}
              basket = {this.props.basket}
              changeLang = {this.props.changeLanguageAC}
              changeCurrentCity = {this.props.changeCurrentCityAC}
          />
        </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    staticContent: state.header.staticContent,
    links: state.header.links,
    cities: state.header.cities,
    favoritesItems: state.header.favoritesItems,
    basketSum: state.header.basketSum,
    catalogueMenu: state.header.catalogueMenu,
    linksMenu: state.header.linksMenu,
    languages: state.header.languages,
    currenLang: state.header.currenLang,
    currentCity: state.header.currentCity,
    basketProducts: state.header.basketProducts,
    category: state.catalogue.category,
    basket: state.basket,
  }
}

const mapDispatchToProps = {
      changeLanguageAC,
      changeCurrentCityAC,
      getCategoryTC
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);