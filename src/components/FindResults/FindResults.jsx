import React, {useState, Component} from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import s from "./FindResults.module.css";
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


class FindResults extends React.Component {
  render() {
    return(
        <div>findResult</div>
    )
  }
}

export default FindResults;