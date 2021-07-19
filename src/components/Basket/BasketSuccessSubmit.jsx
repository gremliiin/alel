import React from "react";
import s from "./Basket.module.css";

import success from "../../common/images/success.png";
import {NavLink} from "react-router-dom";

const BasketSuccessSubmit = () => {
  return (
    <div className={s.basket_main}>
        <div className={s.successSubmit_body}>
          <div className={s.successSubmit_image}>
            <img src={success} alt="image" className={s.successSubmit_image_img}/>
          </div>
          <h2 className={s.successSubmit_title}>Ваш заказ успешно подтвержден!</h2>
          <span className={s.successSubmit_text}>Всю информацию о вашем заказе мы выслали на ваш E-mail </span>
          <NavLink to={"/"} className={s.successSubmit_link}>Вернуться на главную</NavLink>
        </div>
    </div>
  );
}

export default BasketSuccessSubmit;