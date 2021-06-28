import React, {useState, Component} from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import s from "./Main.module.css";
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

import section_image_1 from './../../common/images/section-image-1.png';
import section_image_2 from './../../common/images/section-image-2.png';
import section_image_3 from './../../common/images/section-image-3.png';
import section_image_4 from './../../common/images/section-image-4.png';
import section_image_5 from './../../common/images/section-image-5.png';
import section_image_6 from './../../common/images/section-image-6.png';



class Main extends React.Component {


  render() {

    return (
        <div>
          <section className={s.main_banner}>
            <Banner/>
          </section>

          <section className={`${s.section_cards} ${s.section_dark}`}>
            <Container>
              <h2 className="simple_title">Ура, акция!</h2>
              <StockSlider />
            </Container>
          </section>

          <section className={`${s.section_cards_buy} ${s.section_dark}`}>
            <Container>
              <h2 className="simple_title">Новинка доступная к заказу уже сегодня.</h2>
              <div className={s.choice_slider}>
                <NewProductsSlider />
              </div>
              <div className={s.choice_cards}>
                <CardTypeTwo />
                <CardTypeTwo />
                <CardTypeTwo />
                <CardTypeTwo />
              </div>
            </Container>
          </section>

          <section className={`${s.section_cards_recipe} ${s.section_dark}`}>
            <Container>
              <h2 className="simple_title">Рецепты недели.</h2>
              <RecipesSlider />
            </Container>
            <img src={section_image_1} className={s.section_img_left}/>
            <img src={section_image_2} className={s.section_img_right}/>
          </section>

          <section className={s.about_company_section}>
            <Container>
              <AboutCompany />
              <img src={section_image_3} className={s.section_img_left}/>
              <img src={section_image_4} className={s.section_img_right}/>
            </Container>
          </section>

          <section className={`${s.section_achievements} ${s.section_dark}`}>
            <Container>
              <h2 className="simple_title">Достижения компании.</h2>
              <Row>
                <Col lg={6}>
                  <Card />
                </Col>
                <Col lg={6}>
                  <Card />
                </Col>
                <Col lg={6}>
                  <Card />
                </Col>
                <Col lg={6}>
                  <Card />
                </Col>
              </Row>
            </Container>
          </section>

          <section className={`${s.section_reviews} ${s.section_dark}`}>
            <Container>
              <h2 className="simple_title">Отзывы.</h2>
              <ReviewsSlider />
            </Container>
          </section>

          <section className={`${s.section_shops} ${s.section_dark}`}>
            <Container>
              <h2 className="simple_title">Фирменные магазины «Алель».</h2>
              <MainMap />
            </Container>
            <img src={section_image_5} className={s.section_img_left}/>
            <img src={section_image_6} className={s.section_img_right}/>
          </section>
        </div>
    );

  }
}

export default Main;