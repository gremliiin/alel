import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {changeCurrentCityAC, changeLanguageAC} from "../../redux/HeaderReudcer";

class HeaderContainer extends React.Component {
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
  }
}

const mapDispatchToProps = {
      changeLanguageAC,
      changeCurrentCityAC,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);