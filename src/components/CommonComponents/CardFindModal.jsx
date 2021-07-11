import React from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import s from "./commonStyles.module.css";
import {NavLink} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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