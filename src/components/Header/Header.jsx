import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import s from "./Header.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavLink} from "react-router-dom";
import DropdownModal from "./DropdownModal";
import Burger from 'react-css-burger';

import logo from './../../common/images/logo.png';
import search_icon from  './../../common/images/fi_search.svg';
import arrow_down from './../../common/images/arrow-down.svg';
import whatsapp from './../../common/images/whatsapp.svg';
import fi_heart from './../../common/images/fi_heart.svg';
import basket_cart from './../../common/images/basket-cart.svg';
import fi_menu from './../../common/images/fi_menu.png';
import black_arrow from './../../common/images/black-arrow.svg';
import logo_adaptive from './../../common/images/logo-adaptive.png';
import FindModalResults from "../FindModalResults/FindModalResults";






const Header = (props) => {

  const [citiesDropdownState, setCitiesDropdown] = useState(false);
  const [catalogueLinksDropdown, setCatalogueLinksDropdown] = useState(false);
  const [languageDropdownState, setLanguageDropdown] = useState(false);
  const [burgerState, setBurgerState] = useState(false);
  const [searchState, setSearchState] = useState(false);
  const [isFindModal, setIsFindModal] = useState(false);

  let focusOnInput = false;
  let enterOnFindModal = false;

  let isBackgroundModal = citiesDropdownState ||
      catalogueLinksDropdown ||
      languageDropdownState ||
      searchState;

  let toggleElements = (currentState, setCurrenState) => {
    setCurrenState(!currentState);
  }

  let cancelDropDowns = () => {
    setCitiesDropdown(false);
    setCatalogueLinksDropdown(false);
    setLanguageDropdown(false);
    setBurgerState(false);
    setSearchState(false);
    setIsFindModal(false);
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
                  <img className={s.logo_img} src={logo} alt="logo"/>
                </NavLink>
              </Col>

              <Col lg={10} style={{padding: 0}}>
                <div className={s.nav}>

                  <nav className={s.nav_top}>
                    <ul className={s.nav_list}>

                      <li className={`${s.nav_item} ${s.fi_search}`}>
                        <input onFocus={() => {
                          focusOnInput = true;
                          setIsFindModal(true);
                        }} onBlur={() => {
                          focusOnInput = false;
                          setIsFindModal(focusOnInput || enterOnFindModal);
                        }} placeholder={props.staticContent.textFindPlaceholder} type="text" className={s.search}/>
                        <img className={s.fi_search_img} src={search_icon} alt="search"/>
                        <div onMouseEnter={() => {
                          enterOnFindModal = true;

                        }} onMouseLeave={() => {
                          enterOnFindModal = false;
                          setIsFindModal(focusOnInput || enterOnFindModal);
                        }} style={isFindModal ? {display: "block"} : {display: "none"}}
                             className={s.fi_search_find_modal}>
                          <FindModalResults />
                        </div>
                      </li>

                      <li className={s.nav_item}>
                        <div className={s.li_block}>
                          <div className={s.block_location}>
                            <p>{props.staticContent.textLocation}</p>
                            <div className={s.block_location_wrapper}>
                              <button onClick={() => {toggleElements(citiesDropdownState, setCitiesDropdown)}}>
                                {props.currentCity}
                                <span className={s.before}>
                                  <img className={s.fi_search_img} src={arrow_down} alt="arrow"/>
                                </span>
                              </button>
                              <div style={citiesDropdownState ?
                                  {display: "block"} :
                                  {display: "none"}}
                                   className={s.cities_dropdown}>

                                <nav className={s.cities_dropdown_nav}>
                                  <ul className={s.cities_dropdown_list}>
                                    {props.cities.map((city, id) => {
                                      return <li key={id} className={s.cities_dropdown_item}>
                                        <button onClick={() => {
                                          props.changeCurrentCity(city);
                                          setCitiesDropdown(false);
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
                            <a href={"tel:" + props.links.linkPhone}>{props.links.linkPhone}</a>
                            <span className={s.before}>
                              <img className={s.fi_search_img} src={whatsapp} alt="whatsapp"/>
                            </span>
                          </div>

                        </div>
                      </li>

                      <li className={s.nav_item}>
                        <div className={`${s.li_block} ${s.favotites}`}>
                          <NavLink to={'/favorites'}>{props.links.linkFavorites} <span>({props.favoritesItems})</span> </NavLink>
                          <span className={s.before}>
                            <img className={s.fi_search_img} src={fi_heart} alt="heart"/>
                          </span>
                        </div>
                      </li>

                      <li className={s.nav_item}>
                        <NavLink to={"/Basket"} className={s.basket}>
                          <h3 className={s.basket_title}>{props.staticContent.textBasket}</h3>
                          <p className={s.basket_text}>{props.basketSum} {props.staticContent.textBasketSum}</p>
                          <span className={s.before}>
                            <img className={s.fi_search_img} src={basket_cart} alt="basket"/>
                            <span style={props.basketProducts < 1 ? {display: "none"} : {display: "block"}}>
                              {props.basketProducts > 9 ? 9 + "+" : props.basketProducts}
                            </span>
                          </span>
                        </NavLink>
                      </li>

                    </ul>
                  </nav>
                  <div className={s.nav_bottom_wrapper}>
                    <nav className={s.nav_bottom}>
                      <div className={s.menu_catalogue}>
                        <button className={s.catalogue_btn} onClick={() => {toggleElements(catalogueLinksDropdown, setCatalogueLinksDropdown);}}>
                          {props.staticContent.textCatalogue}
                          <span className={s.before}>
                          <img className={s.fi_search_img} src={fi_menu} alt="menu_btn"/>
                        </span>
                        </button>

                        <nav className={s.catalogue_dropdown}
                             style={catalogueLinksDropdown ?
                                 {display: "block"} :
                                 {display: "none"}}>
                          <ul className={s.catalogue_dropdown_list}>
                            {props.catalogueMenu.map((link, id) => {
                              return <li key={id} className={s.catalogue_dropdown_item}>
                                <NavLink to={'/catalogue'}
                                         onClick={() => {toggleElements(catalogueLinksDropdown, setCatalogueLinksDropdown)}}>
                                  {link}
                                  <div className={s.before}>
                                    <img src={arrow_down} alt="" className={s.catalogue_link_arrow}/>
                                  </div>
                                </NavLink>
                              </li>
                            })}

                          </ul>
                        </nav>
                      </div>

                      <ul className={s.catalogue_list}>
                        {
                          props.linksMenu.map((content, id) => {
                            return <li key={id} className={s.catalogue_item}>
                              <NavLink exact to={content.link} activeClassName={s.catalogue_link_active}
                                       className={s.catalogue_link}>{content.title}</NavLink>
                            </li>
                          })
                        }
                      </ul>

                      <div className={s.change_language} onClick={() => {toggleElements(languageDropdownState, setLanguageDropdown)}}>
                        <button className={s.change_language_btn}>
                          {props.currenLang}
                          <span className={s.before}>
                          <img src={black_arrow} alt="arrow_btn" className={s.before_language_arrow}/>
                        </span>
                        </button>
                        <nav className={s.lang_dropdown_nav}>
                          <ul className={s.lang_dropdown_list} style={languageDropdownState ?
                              {display: "block"} : {display: "none"}}>
                            {props.languages.map((lang, id) => {
                              return <li key={id} className={s.lang_dropdown_item}>
                                <button onClick={() => {
                                  props.changeLang(lang);
                                }} className={s.lang_dropdown_link}>
                                  <span className={s.lang_dropdown_lang}>{lang}</span>
                                  <span className={`${s.lang_dropdown_fake_input} ${ props.languages[id] === props.currenLang ? s.active : ""}`}>
                                    <span className={s.lang_dropdown_fake_input_check}></span>
                                  </span>
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
                       cancelDropDowns={() => {setSearchState(false)}}
                       isBackgroundModal={searchState}
                       color={"rgba(43, 42, 41, 0.5)"}
                       opacity={"1"}
        />
        <header className={s.adaptive_header}>


          <nav className={s.adaptive_header_main}>
            <div className={s.adaptive_header_btn}>
              <Burger
                  onClick={() => setBurgerState(!burgerState)}
                  active={burgerState}
                  burger="collapse"
                  color="#27AE60"
                  hoverOpacity={1}
                  scale={0.7}
                  marginTop={"0"}
                  marginLeft={"0"}
              />
            </div>

            <NavLink to={"/favorites"} className={s.adaptive_header_favorite}>
              <img className={s.adaptive_header_favorite_img} src={fi_heart} alt="favorite"/>
            </NavLink>

            <NavLink to={"/"} className={s.adaptive_header_logo}>
              <img className={s.adaptive_header_logo_img} src={logo_adaptive} alt="logo"/>
            </NavLink>

            <button onClick={() => {setSearchState(!searchState)}}
                    className={s.adaptive_header_search}>
              <img className={s.adaptive_header_search_img} src={search_icon} alt="search"/>
            </button>

            <NavLink to={"/Basket"} className={s.adaptive_header_basket}>
              <img className={s.adaptive_header_basket} src={basket_cart} alt="basket"/>
              <span style={props.basketProducts < 1 ? {display: "none"} : {display: "block"}}>
                {props.basketProducts > 9 ? 9 + "+" : props.basketProducts}
              </span>
            </NavLink>
          </nav>

          <div className={s.adaptive_menu}
               style={burgerState ? {transform: "translateX(0)"} : {transform: "translateX(-3000%)"}}>
            <div className={s.adaptive_location}>
              <div className={s.block_location}>
                <p>{props.staticContent.textLocation}</p>
                <div className={s.block_location_wrapper}>
                  <button onClick={() => {toggleElements(citiesDropdownState, setCitiesDropdown)}}>
                    {props.currentCity}
                    <span className={s.before}>
                      <img className={s.fi_search_img} src={arrow_down} alt="arrow"/>
                    </span>
                  </button>
                  <div style={citiesDropdownState ?
                      {display: "block"} :
                      {display: "none"}}
                       className={s.cities_dropdown}>

                    <nav className={s.cities_dropdown_nav}>
                      <ul className={s.cities_dropdown_list}>
                        {props.cities.map((city, id) => {
                          return <li key={id} className={s.cities_dropdown_item}>
                            <button onClick={() => {
                              props.changeCurrentCity(city);
                              setCitiesDropdown(false);
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
              {props.languages.map((lang, id) => {
                return <button onClick={() => {
                    props.changeLang(lang);
                }}
                               key={id}
                               className={`${lang === props.currenLang ? `${s.active}` : ""}`}>
                  {lang}
                </button>
              })}
            </div>

            <nav className={s.catalogue_dropdown}>
              <h3 className={s.catalogue_dropdown_title}>{props.staticContent.textCatalogue}</h3>
              <ul className={s.catalogue_dropdown_list}>
                {props.catalogueMenu.map((link, id) => {
                  return <li key={id} className={s.catalogue_dropdown_item}>
                    <NavLink to={'/catalogue'}
                             onClick={() => {
                               setBurgerState(!burgerState);
                             }}>
                      {link}
                      <div className={s.before}>
                        <img src={arrow_down} alt="" className={s.catalogue_link_arrow}/>
                      </div>
                    </NavLink>
                  </li>
                })}

              </ul>
            </nav>

            <ul className={s.catalogue_list}>
              {
                props.linksMenu.map((content, id) => {
                  return <li key={id} className={s.catalogue_item}>
                    <NavLink exact to={content.link} activeClassName={s.catalogue_link_active}
                             className={s.catalogue_link}>{content.title}</NavLink>
                  </li>
                })
              }

            </ul>

            <div className={s.block_contact}>
              <a href={"tel:" + props.links.linkPhone}>{props.links.linkPhone}</a>
              <span className={s.before}>
                <img className={s.fi_search_img} src={whatsapp} alt="whatsapp"/>
              </span>
            </div>
          </div>

          <div className={s.search_menu} style={searchState ? {display: "block"} : {display: "none"}}>
            <div className={`${s.nav_item} ${s.fi_search}`}>
              <input onFocus={() => {
                focusOnInput = true;
                setIsFindModal(true);
              }} onBlur={() => {
                focusOnInput = false;
                setIsFindModal(focusOnInput || enterOnFindModal);
              }} placeholder={props.staticContent.textFindPlaceholder} type="text" className={s.search}/>
              <img className={s.fi_search_img} src={search_icon} alt="search"/>
            </div>
            <div onMouseEnter={() => {
              enterOnFindModal = true;

            }} onMouseLeave={() => {
              enterOnFindModal = false;
              setIsFindModal(focusOnInput || enterOnFindModal);
            }} style={isFindModal ? {display: "block"} : {display: "none"}}
                 className={s.fi_search_find_modal}>
              <FindModalResults />
            </div>
          </div>

        </header>
      </div>
  );
}

export default Header;