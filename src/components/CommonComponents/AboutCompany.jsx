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
import CardTypeThree from "../CommonComponents/CardTypeThree";

const AboutCompany = () => {
  return (
      <div className={s.about_company}>
        <h2 className={"simple_title"}>О нашей компании.</h2>
        <div className={s.about_company_wrapper}>
          <Row>
            <Col lg={5}>
              <div className={s.about_company_image}>
                <img src="/images/about-company-img-1.png" alt="aboutcompany" className={s.about_company_image_img}/>
              </div>
            </Col>
            <Col lg={7}>
              <div className={s.about_company_text_block}>
                <h3 className={s.about_company_title}>ПРОИЗВОДИТЕЛЬ МЯСА ПТИЦЫ №1 В КАЗАХСТАНЕ.</h3>
                <p className={s.about_company_text}>Сегодня АО “Алель Агро” является крупнейшим производителем мяса
                  птицы в Казахстане . Объем производства в 2020 году составил 51 000 тонн мяса, что составило 23%
                  рынка. В 2021 году планируется увеличение объемов до 59 000 тонн. Высокое качество продукции,
                  грамотная ценовая политика позволяет держать лидирующие позиции среди птицефабрик Казахстана.</p>
              </div>
              <div className={s.about_company_text_block}>
                <h3 className={s.about_company_title}>МИССИЯ КОМПАНИИ.</h3>
                <p className={s.about_company_text}>Создание современного высокотехнологичного производства по выпуску
                  экологически чистых и полезных продуктов из мяса птицы бройлера, с заботой о благополучии и здоровье
                  потребителей.</p>
              </div>
            </Col>
          </Row>

          <Row style={{marginTop: "40px"}}>
            <Col lg={6}>
              <div className={s.about_company_text_block}>
                <h3 className={s.about_company_title}>НАШИ ЦЕННОСТИ.</h3>
                <p className={s.about_company_text}>
                  <span>Люди – это главная ценность и движущая сила компании.</span>
                  <span>Качество –высокое качества мяса птицы – сбалансированный корм растительного происхождения, отличные условия содержания птицы, высокая степень биологической безопасности. </span>
                  <span>Стремление к совершенству –  поиск, изучение, применение самых передовых в мире технологий кормления,  выращивания птицы, технологии переработки мяса птицы.</span>
                </p>
              </div>
            </Col>

            <Col lg={6}>
              <div className={s.about_company_text_block}>
                <h3 className={s.about_company_title}>ВИДЕНИЕ.</h3>
                <p className={s.about_company_text}>Удовлетворение современных требований рынка в продукции  птицеводства и формирование высокого доверия потребителей.</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
  );
}

export default AboutCompany;