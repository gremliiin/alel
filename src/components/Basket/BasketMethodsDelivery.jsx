import React, {useState} from "react";
import s from "./Basket.module.css";

import notAvailable from "../../common/images/chicken.png";

const BasketMethodsDelivery = (props) => {
  const [statusDelivery, setStatusDelivery] = useState(true);
  const [statusYourself, setStatusYourSelf] = useState(false);


  return (
      <div className={s.basketMethods}>
        <div className={s.basketMethods_tabs}>
          <button onClick={() => {
            setStatusDelivery(true);
            setStatusYourSelf(false);
          }}
                  className={`${s.basketMethods_tabs_link}
                  ${statusDelivery ? s.active : ""}`}>Доставка
          </button>
          <button onClick={() => {
            setStatusDelivery(false);
            setStatusYourSelf(true);
          }}
                  className={`${s.basketMethods_tabs_link} 
                  ${statusYourself ? s.active : ""}`}>Самовывоз из магазина
          </button>
        </div>
        <div style={statusDelivery ? {display: "block"} : {display: "none"}}
             className={s.basketMethods_block}>
          <div className={s.adressForm}>
            <h2 className={s.adressForm_title}>Адрес доставки</h2>
            <div className={s.adressForm_form}>
              <div className={s.adressForm_form_inputs}>
                <input placeholder={"Улица"} type="text" className={s.adressForm_from_input}/>
                <input placeholder={"Дом/корпус"} type="number" className={s.adressForm_from_input}/>
                <input placeholder={"Квартира"} type="number" className={s.adressForm_from_input}/>
              </div>
              <button onClick={() => {
                props.setStateBasketTabOne(false);
                props.setStateBasketTabTwo(true);
              }}
                  className={s.adressForm_form_submit}>Далее</button>
            </div>
          </div>
        </div>
        <div style={statusYourself ? {display: "block"} : {display: "none"}}
             className={s.basketMethods_block}>
          <div className={s.notAvailable}>
            <div className={s.notAvailable_image}>
              <img src={notAvailable} alt="notAvailable" className={s.notAvailable_img}/>
            </div>
            <p className={s.notAvailable_text}>К сожалению, ни в одном из наших филиалов нет в наличии комплекта
              продуктов по Вашему заказу. Поэтому предлагаем Вам оформить доставку.
              Наш курьер заедет в несколько филиалов и соберёт Ваш заказ.</p>
            <h2 className={s.notAvailable_title}>С уважением, 'АЛЕЛЬ АГРО'</h2>
          </div>
        </div>
      </div>
  );
}

export default BasketMethodsDelivery;