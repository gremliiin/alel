import React from "react";
import './App.css';
import {Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import HeaderContainer from "./components/Header/HeaderContainer";
import CatalogueContainer from "./components/Catalogue/CatalogueContainer";
import BasketContainer from "./components/Basket/BasketContainer";
import Product from "./components/Product/Product";


function App() {
  return (
    <div className="app">
      <HeaderContainer />
    <div className="main">

      <Route exact path="/">
        <Main />
      </Route>

      <Route path="/about">
        О товаре
      </Route>

      <Route path="/certificates">
        Сертификаты
      </Route>

      <Route path="/recipes">
        Рецепты
      </Route>

      <Route path="/buyit">
        Где купить?
      </Route>

      <Route path="/contacts">
        Контакты
      </Route>

      <Route path="/favorites">
        Избранное
      </Route>

      <Route exact path="/catalogue">
        <CatalogueContainer />
      </Route>

      <Route path="/basket">
        <BasketContainer />
      </Route>

      <Route path="/catalogue/product">
        <Product />
      </Route>

    </div>
    <Footer/>
  </div>
  );
}

export default App;
