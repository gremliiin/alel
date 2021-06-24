import './App.css';
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

function App() {
  return (
      <Router>
        <div className="app">
          <Header/>
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
              Каталог
            </Route>

            <Route path="/basket">
              Корзина
            </Route>

          </div>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
