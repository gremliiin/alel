import React, {useState, Component} from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import s from "./commonStyles.module.css";
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

import modal_find_image from "../../common/images/modal_find_image.png";

const CardFindModal = () => {
  return(
    <NavLink to={"/catalogue"} className={s.card_find_modal}>
      <div className={s.card_find_modal_image}>
        <img src={modal_find_image} alt="cardModal" className={s.card_find_modal_img}/>
      </div>
      <div className={s.card_find_modal_content}>
        <h3 className={s.card_find_modal_content_title}>Куриное бедро </h3>
        <span className={s.card_find_modal_content_have}>В наличии</span>
        <span className={s.card_find_modal_content_price}>0,7 кг/1290 ₸</span>
      </div>
    </NavLink>
  );
}

export default CardFindModal;