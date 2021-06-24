import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import s from "./Header.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavLink} from "react-router-dom";
import DropdownModal from "./DropdownModal";
import Burger from 'react-css-burger';


const Header = () => {

  const [localState, setLocalState] = useState(
      {
        stateCities: {
          isCitiesDropdown: false,
          cities: ["Алматы", "Караганда", "Каскелен"],
          currentCity: "Алматы"
        },
        stateCatalogueLinks: {
          isCatalogueLinksDropdown: false,
          CatalogueLinks: ["Цыпленок бройлера", "Цыплята табака ", "Окорочка", "Бедро",
            "Голень", "Крылышки", "Филе", "Грудинка", "Показать все"]
        },
        stateLanguages: {
          isLanguageDropdown: false,
          languages: ["Рус", "Қаз"],
          currenLang: "Рус"
        }
      }
  );

  const [burgerState, setBurgerState] = useState({active: false});
  const [searchState, setSearchState] = useState({active: false});

  let isBackgroundModal = localState.stateCities.isCitiesDropdown ||
      localState.stateCatalogueLinks.isCatalogueLinksDropdown ||
      localState.stateLanguages.isLanguageDropdown ||
      searchState.active;

  let products = 5;

  window.State = localState;

  let toggleDropdownCities = () => {
    let state = {...localState};
    state.stateCities.isCitiesDropdown = !localState.stateCities.isCitiesDropdown;
    setLocalState({...state});
  }

  let toggleDropdownCatalogue = () => {
    let state = {...localState};
    state.stateCatalogueLinks.isCatalogueLinksDropdown = !localState.stateCatalogueLinks.isCatalogueLinksDropdown;
    setLocalState({...state});
  }

  let toggleDropdownLanguages = () => {
    let state = {...localState};
    state.stateLanguages.isLanguageDropdown = !localState.stateLanguages.isLanguageDropdown;
    setLocalState({...state});
  }

  let changeCity = (city) => {
    let state = {...localState};
    state.stateCities.currentCity = city;
    setLocalState({...state});
  }

  let changeLanguage = (lang) => {
    let state = {...localState};
    state.stateLanguages.currenLang = lang;
    setLocalState({...state});
  }

  let cancelDropDowns = () => {
    let state = {...localState};
    state.stateCities.isCitiesDropdown = false;
    state.stateCatalogueLinks.isCatalogueLinksDropdown = false;
    state.stateLanguages.isLanguageDropdown = false;
    setSearchState({active: false});
    setLocalState({...state});
  }

  return (
      <div className={s.headers_wrapper}>
        <header className={s.header}>
          <DropdownModal indexZ={1}
                         cancelDropDowns={cancelDropDowns} isBackgroundModal={isBackgroundModal}/>
          <Container fluid="xl">
            <Row>

              <Col lg={2} style={{padding: 0}}>
                <NavLink to={"/"} className={s.logo}>
                  <img className={s.logo_img} src={document.location.href + "/images/logo.png"} alt="logo"/>
                </NavLink>
              </Col>

              <Col lg={10} style={{padding: 0}}>
                <div className={s.nav}>

                  <nav className={s.nav_top}>
                    <ul className={s.nav_list}>

                      <li className={`${s.nav_item} ${s.fi_search}`}>
                        <input placeholder={"Что ищите?"} type="text" className={s.search}/>
                        <img className={s.fi_search_img} src="/images/fi_search.svg" alt="search"/>
                      </li>

                      <li className={s.nav_item}>
                        <div className={s.li_block}>
                          <div className={s.block_location}>
                            <p>Местоположение:</p>
                            <div className={s.block_location_wrapper}>
                              <button onClick={toggleDropdownCities}>
                                {localState.stateCities.currentCity}
                                <span className={s.before}>
                                  <img className={s.fi_search_img} src="/images/arrow-down.svg" alt="arrow"/>
                                </span>
                              </button>
                              <div style={localState.stateCities.isCitiesDropdown ?
                                  {display: "block"} :
                                  {display: "none"}}
                                   className={s.cities_dropdown}>

                                <nav className={s.cities_dropdown_nav}>
                                  <ul className={s.cities_dropdown_list}>
                                    {localState.stateCities.cities.map((city, id) => {
                                      return <li key={id} className={s.cities_dropdown_item}>
                                        <button onClick={() => {
                                          changeCity(city);
                                          toggleDropdownCities();
                                        }}
                                                className={s.cities_dropdown_link}>{city}
                                        </button>
                                      </li>
                                    })}
                                  </ul>
                                </nav>

                              </div>
                            </div>
                          </div>

                          <div className={s.block_contact}>
                            <a href="tel:+77272254360">+7 (727)225 43 60</a>
                            <span className={s.before}>
                              <img className={s.fi_search_img} src="/images/whatsapp.svg" alt="whatsapp"/>
                            </span>
                          </div>

                        </div>
                      </li>

                      <li className={s.nav_item}>
                        <div className={`${s.li_block} ${s.favotites}`}>
                          <NavLink to={'/favorites'}>Избранное <span>({0})</span> </NavLink>
                          <span className={s.before}>
                            <img className={s.fi_search_img} src="/images/fi_heart.svg" alt="heart"/>
                          </span>
                        </div>
                      </li>

                      <li className={s.nav_item}>
                        <NavLink to={"/basket"} className={s.basket}>
                          <h3 className={s.basket_title}>Корзина:</h3>
                          <p className={s.basket_text}>7 700 тенге.</p>
                          <span className={s.before}>
                            <img className={s.fi_search_img} src="/images/basket-cart.svg" alt="basket"/>
                            <span style={products < 1 ? {display: "none"} : {display: "block"}}>
                              {products > 9 ? 9 + "+" : products}
                            </span>
                          </span>
                        </NavLink>
                      </li>

                    </ul>
                  </nav>
                  <div className={s.nav_bottom_wrapper}>
                    <nav className={s.nav_bottom}>
                      <div className={s.menu_catalogue}>
                        <button className={s.catalogue_btn} onClick={toggleDropdownCatalogue}>
                          Каталог продукции
                          <span className={s.before}>
                          <img className={s.fi_search_img} src="/images/fi_menu.png" alt="menu_btn"/>
                        </span>
                        </button>

                        <nav className={s.catalogue_dropdown}
                             style={localState.stateCatalogueLinks.isCatalogueLinksDropdown ?
                                 {display: "block"} :
                                 {display: "none"}}>
                          <ul className={s.catalogue_dropdown_list}>
                            {localState.stateCatalogueLinks.CatalogueLinks.map((link, id) => {
                              return <li key={id} className={s.catalogue_dropdown_item}>
                                <NavLink to={'/catalogue'}
                                         onClick={toggleDropdownCatalogue}>
                                  {link}
                                  <div className={s.before}>
                                    <img src="/images/arrow-down.svg" alt="" className={s.catalogue_link_arrow}/>
                                  </div>
                                </NavLink>
                              </li>
                            })}

                          </ul>
                        </nav>
                      </div>

                      <ul className={s.catalogue_list}>

                        <li className={s.catalogue_item}>
                          <NavLink exact to={'/'} activeClassName={s.catalogue_link_active}
                                   className={s.catalogue_link}>Главная</NavLink>
                        </li>

                        <li className={s.catalogue_item}>
                          <NavLink to={'/about'} activeClassName={s.catalogue_link_active}
                                   className={s.catalogue_link}>О нас</NavLink>
                        </li>

                        <li className={s.catalogue_item}>
                          <NavLink to={'/certificates'} activeClassName={s.catalogue_link_active}
                                   className={s.catalogue_link}>Сертификаты</NavLink>
                        </li>

                        <li className={s.catalogue_item}>
                          <NavLink to={'/recipes'} activeClassName={s.catalogue_link_active}
                                   className={s.catalogue_link}>Рецепты</NavLink>
                        </li>

                        <li className={s.catalogue_item}>
                          <NavLink to={'/buyit'} activeClassName={s.catalogue_link_active}
                                   className={s.catalogue_link}>Где купить?</NavLink>
                        </li>

                        <li className={s.catalogue_item}>
                          <NavLink to={'/contacts'} activeClassName={s.catalogue_link_active}
                                   className={s.catalogue_link}>Контакты</NavLink>
                        </li>

                      </ul>

                      <div className={s.change_language} onClick={toggleDropdownLanguages}>
                        <button className={s.change_language_btn}>
                          {localState.stateLanguages.currenLang}
                          <span className={s.before}>
                          <img src="/images/black-arrow.svg" alt="arrow_btn" className={s.before_language_arrow}/>
                        </span>
                        </button>
                        <nav className={s.lang_dropdown_nav}>
                          <ul className={s.lang_dropdown_list} style={localState.stateLanguages.isLanguageDropdown ?
                              {display: "block"} : {display: "none"}}>
                            {localState.stateLanguages.languages.map((lang, id) => {
                              return <li key={id} className={s.lang_dropdown_item}>
                                <button onClick={() => {
                                  changeLanguage(lang);
                                }} className={s.lang_dropdown_link}>{lang}
                                </button>
                              </li>
                            })}
                          </ul>
                        </nav>

                      </div>

                    </nav>

                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </header>
        <DropdownModal indexZ={1}
                       cancelDropDowns={() => {setSearchState({active: false})}}
                       isBackgroundModal={searchState.active}
                       color={"rgba(43, 42, 41, 0.5)"}
                       opacity={"1"}
        />
        <header className={s.adaptive_header}>


          <nav className={s.adaptive_header_main}>
            <div className={s.adaptive_header_btn}>
              <Burger
                  onClick={() => setBurgerState({active: !burgerState.active})}
                  active={burgerState.active}
                  burger="collapse"
                  color="#27AE60"
                  hoverOpacity={1}
                  scale={0.7}
                  marginTop={"0"}
                  marginLeft={"0"}
              />
            </div>

            <NavLink to={"/favorites"} className={s.adaptive_header_favorite}>
              <img className={s.adaptive_header_favorite_img} src="/images/fi_heart.svg" alt="favorite"/>
            </NavLink>

            <NavLink to={"/"} className={s.adaptive_header_logo}>
              <img className={s.adaptive_header_logo_img} src="/images/logo-adaptive.png" alt="logo"/>
            </NavLink>

            <button onClick={() => {setSearchState({active: !searchState.active})}}
                    className={s.adaptive_header_search}>
              <img className={s.adaptive_header_search_img} src="/images/fi_search.svg" alt="search"/>
            </button>

            <NavLink to={"/basket"} className={s.adaptive_header_basket}>
              <img className={s.adaptive_header_basket} src="/images/basket-cart.svg" alt="basket"/>
              <span style={products < 1 ? {display: "none"} : {display: "block"}}>
                {products > 9 ? 9 + "+" : products}
              </span>
            </NavLink>
          </nav>

          <div className={s.adaptive_menu}
               style={burgerState.active ? {display: "block"} : {display: "none"}}>
            <div className={s.adaptive_location}>
              <div className={s.block_location}>
                <p>Местоположение:</p>
                <div className={s.block_location_wrapper}>
                  <button onClick={toggleDropdownCities}>
                    {localState.stateCities.currentCity}
                    <span className={s.before}>
                      <img className={s.fi_search_img} src="/images/arrow-down.svg" alt="arrow"/>
                    </span>
                  </button>
                  <div style={localState.stateCities.isCitiesDropdown ?
                      {display: "block"} :
                      {display: "none"}}
                       className={s.cities_dropdown}>

                    <nav className={s.cities_dropdown_nav}>
                      <ul className={s.cities_dropdown_list}>
                        {localState.stateCities.cities.map((city, id) => {
                          return <li key={id} className={s.cities_dropdown_item}>
                            <button onClick={() => {
                              changeCity(city);
                              toggleDropdownCities();
                            }}
                                    className={s.cities_dropdown_link}>{city}
                            </button>
                          </li>
                        })}
                      </ul>
                    </nav>

                  </div>
                </div>
              </div>
            </div>

            <div className={s.adaptive_lang}>
              {localState.stateLanguages.languages.map((lang, id) => {
                return <button onClick={() => {
                  changeLanguage(lang)
                }}
                               key={id}
                               className={`${lang === localState.stateLanguages.currenLang ? `${s.active}` : ""}`}>
                  {lang}
                </button>
              })}
            </div>

            <nav className={s.catalogue_dropdown}>
              <h3 className={s.catalogue_dropdown_title}>Каталог продукции:</h3>
              <ul className={s.catalogue_dropdown_list}>
                {localState.stateCatalogueLinks.CatalogueLinks.map((link, id) => {
                  return <li key={id} className={s.catalogue_dropdown_item}>
                    <NavLink to={'/catalogue'}
                             onClick={() => {
                               setBurgerState({active: !burgerState.active});
                             }}>
                      {link}
                      <div className={s.before}>
                        <img src="/images/arrow-down.svg" alt="" className={s.catalogue_link_arrow}/>
                      </div>
                    </NavLink>
                  </li>
                })}

              </ul>
            </nav>

            <ul className={s.catalogue_list}>

              <li className={s.catalogue_item}>
                <NavLink onClick={() => setBurgerState({active: !burgerState.active})}
                         exact to={'/'} activeClassName={s.catalogue_link_active}
                         className={s.catalogue_link}>Главная</NavLink>
              </li>

              <li className={s.catalogue_item}>
                <NavLink onClick={() => setBurgerState({active: !burgerState.active})}
                         to={'/about'} activeClassName={s.catalogue_link_active}
                         className={s.catalogue_link}>О нас</NavLink>
              </li>

              <li className={s.catalogue_item}>
                <NavLink onClick={() => setBurgerState({active: !burgerState.active})}
                         to={'/certificates'} activeClassName={s.catalogue_link_active}
                         className={s.catalogue_link}>Сертификаты</NavLink>
              </li>

              <li className={s.catalogue_item}>
                <NavLink onClick={() => setBurgerState({active: !burgerState.active})}
                         to={'/recipes'} activeClassName={s.catalogue_link_active}
                         className={s.catalogue_link}>Рецепты</NavLink>
              </li>

              <li className={s.catalogue_item}>
                <NavLink onClick={() => setBurgerState({active: !burgerState.active})}
                         to={'/buyit'} activeClassName={s.catalogue_link_active}
                         className={s.catalogue_link}>Где купить?</NavLink>
              </li>

              <li className={s.catalogue_item}>
                <NavLink onClick={() => setBurgerState({active: !burgerState.active})}
                         to={'/contacts'} activeClassName={s.catalogue_link_active}
                         className={s.catalogue_link}>Контакты</NavLink>
              </li>


            </ul>

            <div className={s.block_contact}>
              <a href="tel:+77272254360">+7 (727)225 43 60</a>
              <span className={s.before}>
                <img className={s.fi_search_img} src="/images/whatsapp.svg" alt="whatsapp"/>
              </span>
            </div>
          </div>

          <div className={s.search_menu} style={searchState.active ? {display: "block"} : {display: "none"}}>
            <div className={`${s.nav_item} ${s.fi_search}`}>
              <input placeholder={"Что ищите?"} type="text" className={s.search}/>
              <img className={s.fi_search_img} src="/images/fi_search.svg" alt="search"/>
            </div>
          </div>

        </header>
      </div>
  );
}

export default Header;