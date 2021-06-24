import React, {useState, Component} from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import s from "./commonStyles.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavLink} from "react-router-dom";
import { ReactComponent as HeartCard } from './../../common/images/heart-card.svg';

import product_1 from './../../common/images/product-1.png';

const CardTypeTwo = () => {

  const [isLike, setIslike] = useState(false);


  return (
      <div className={s.CardTypeTwo}>
        <div className={s.CardTypeTwo_images}>
          <img src={product_1} alt="product-1" className={s.CardTypeTwo_images_img}/>
          <span className={s.CardTypeTwo_images_status}>Новинка</span>
          <span className={s.CardTypeTwo_images_like} onClick={() => {
            setIslike(!isLike);
          }}>
            <span className={s.CardTypeTwo_images_like_img}>
              <HeartCard className={isLike ? "heart_card" : ""}/>
            </span>
          </span>
        </div>
        <div className={s.CardTypeTwo_content}>
          <h2 className={s.CardTypeTwo_content_title}>Куриное бедро </h2>
          <p className={s.CardTypeTwo_content_status}>В наличии</p>
          <div className={s.CardTypeTwo_content_btns}>
            <button className={s.CardTypeTwo_content_btn}>0,7 кг</button>
            <button className={s.CardTypeTwo_content_btn}>0,9 кг</button>
          </div>
          <button className={s.CardTypeTwo_content_addBasket}>В корзину за 1290 ₸</button>
        </div>
      </div>
  );
}

export default CardTypeTwo;