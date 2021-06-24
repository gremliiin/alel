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

import protection from './../../common/images/protection.svg';

const Card = () => {
  return (
      <div className={s.card}>
        <div className={s.card_image}>
          <img src={protection} alt="card-img" className={s.card_image_img}/>
        </div>
        <h3 className={s.card_title}>Высокое доверие</h3>
        <p className={s.card_text}>Наше достоинство- Сертификат «ХАЛАЛ» присвоенный Духовным управлением Мусульман
          Казахстана.В 2015 году наша компания получила награду в Конкурсе потребительского признания «Халык маркасы
          2015»</p>
      </div>
  );
}

export default Card;