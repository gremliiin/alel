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
import CardTypeOneSlider from "../Sliders/CardTypeOneSlider";
import CardTypeTwoSlider from "../Sliders/CardTypeTwoSlider";
import CardTypeThree from "../CommonComponents/CardTypeThree";
import CardTypeThreeSlider from "../Sliders/CardTypeThreeSlider";
import AboutCompany from "../CommonComponents/AboutCompany";
import Card from "../CommonComponents/Card";


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
              <CardTypeOneSlider />
            </Container>
          </section>

          <section className={`${s.section_cards_buy} ${s.section_dark}`}>
            <Container>
              <h2 className="simple_title">Новинка доступная к заказу уже сегодня.</h2>
              <div className={s.choice_slider}>
                <CardTypeTwoSlider />
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
              <CardTypeThreeSlider />
            </Container>
            <img src="/images/section-image-1.png" className={s.section_img_left}/>
            <img src="/images/section-image-2.png" className={s.section_img_right}/>
          </section>

          <section className={s.about_company_section}>
            <Container>
              <AboutCompany />
              <img src="/images/section-image-3.png" className={s.section_img_left}/>
              <img src="/images/section-image-4.png" className={s.section_img_right}/>
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
        </div>
    );

  }
}

export default Main;