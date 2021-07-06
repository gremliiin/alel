import React, {useState, Component} from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import s from "./FindModalResults.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavLink} from "react-router-dom";
import Banner from "../CommonComponents/Banner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardTypeOne from "../CommonComponents/CardTypeOne";
import CardTypeTwo from "../CommonComponents/CardTypeTwo";
import StockSlider from "../Sliders/StockSlider";
import NewProductsSlider from "../Sliders/NewProductsSlider";
import CardTypeThree from "../CommonComponents/CardTypeThree";
import RecipesSlider from "../Sliders/RecipesSlider";
import AboutCompany from "../CommonComponents/AboutCompany";
import Card from "../CommonComponents/Card";
import ReviewsCard from "../CommonComponents/ReviewsCard";
import ReviewsSlider from "../Sliders/ReviewsSlider";
import MainMap from "../Maps/MainMap";

import arrow_link_green from "../../common/images/arrow_link_green.svg";
import CardFindModal from "../CommonComponents/CardFindModal";

class FindModalResults extends React.Component {
  render() {
    return(
        <div className={s.find_modal_result}>
          <h2 className={s.find_modal_result_title}>Результаты поиска:</h2>
          <div className={s.find_modal_result_catalogue}>
            <div className={s.find_modal_result_catalogue_titles}>
              <span className={s.find_modal_result_descr}>Каталог (6)</span>
              <a className={s.find_modal_result_catalogue_showall}>
                Посмотреть все
                <span className={s.before}>
                  <img className={s.arrow_link} src={arrow_link_green} alt="arrow"/>
                </span>
              </a>
            </div>
            <div className={s.find_modal_result_catalogue_cards}>
                <CardFindModal />
                <CardFindModal />
                <CardFindModal />
                <CardFindModal />
            </div>
          </div>
          <div className={s.find_modal_result_another}>
            <div className={s.find_modal_result_another_titles}>
              <span className={s.find_modal_result_descr}>Другое (2)</span>
            </div>
            <a className={s.find_modal_result_another_btn}>
              Рецепты “Суп харчо”
              <span className={s.before}>
                  <img className={s.arrow_link} src={arrow_link_green} alt="arrow"/>
              </span>
            </a>
            <a className={s.find_modal_result_another_btn}>
              О нас
              <span className={s.before}>
                  <img className={s.arrow_link} src={arrow_link_green} alt="arrow"/>
              </span>
            </a>
          </div>
        </div>
    )
  }
}

export default FindModalResults;