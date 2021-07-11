import React from "react";
import './App.css';
import {Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import FindResults from "./components/FindResults/FindResults";
import HeaderContainer from "./components/Header/HeaderContainer";
import CatalogueContainer from "./components/Catalogue/CatalogueContainer";
import BasketContainer from "./components/Basket/BasketContainer";


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

      <Route path="/catalogue">
        <CatalogueContainer />
      </Route>

      <Route path="/basket">
        <BasketContainer />
      </Route>

      <Route exact path="/catalogue/findResults">
        <FindResults />
      </Route>

    </div>
    <Footer/>
  </div>
  );
}

export default App;
