import React, {useState, Component} from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import s from "./commonStyles.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavLink} from "react-router-dom";

const CardTypeThree = ({title}) => {

  if(title.length > 32) {
    title = title.substr(0, 32 - 4) + "...";
  }

  return(
      <NavLink to={"/basket"} className={s.CardTypeThree}>
        <div className={s.CardTypeThree_image}>
          <img className={s.CardTypeThree_image_img} src={document.location.href + "/images/recipe-1.png"} alt="cardtypethree" />
        </div>
        <div className={s.CardTypeThree_content}>
          <h2 className={s.CardTypeThree_content_title}>{title}</h2>
          <div className={s.CardTypeThree_info}>
            <p className={s.CardTypeThree_info_text}>
              40-50 мин
              <span className={s.before}>
                <img src={document.location.href + "/images/u_clock.svg"} alt="time" className={s.CardTypeThree_info_text_img}/>
              </span>
            </p>
            <p className={s.CardTypeThree_info_text}>
              137 ккал
              <span className={s.before}>
                <img src={document.location.href + "/images/u_fire.svg"} alt="fire" className={s.CardTypeThree_info_text_img}/>
              </span>
            </p>
          </div>
        </div>
      </NavLink>
  );
}

export default CardTypeThree;