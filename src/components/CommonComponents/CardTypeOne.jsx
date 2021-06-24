import React, {useState, Component} from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import s from "./commonStyles.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavLink} from "react-router-dom";

const CardTypeOne = ({image, priceOld, priceNew, title, text, id}) => {

  const altCount = () => {
    let alt = image;
    alt = alt.split("/");
    alt = alt[alt.length - 1];
    alt = alt.split(".");
    alt = alt[0];
    return alt;
  }

  return (
      <NavLink to={"/basket"} className={s.CardTypeOne}>
        <div className={s.CardTypeOne_image}>
          <img className={s.CardTypeOne_image_img} src={image} alt={altCount() + `-${id}`}/>
          <span className={s.CardTypeOne_image_desc}>Акция</span>
        </div>
        <div className={s.CardTypeOne_content}>
          <h2 className={s.CardTypeOne_title}>{title}</h2>
          <p className={s.CardTypeOne_text}>{text}</p>
          <div className={s.CardTypeOne_text_price}>
            <span className={s.CardTypeOne_text_price_old}>{priceOld + " "}₸</span>
            <span className={s.CardTypeOne_text_price_new}>{priceNew + " "}₸</span>
          </div>
        </div>
      </NavLink>
  );
}

export default CardTypeOne;