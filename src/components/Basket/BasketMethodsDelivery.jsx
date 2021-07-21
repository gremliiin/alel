import React, {useState} from "react";
import s from "./Basket.module.css";

import notAvailable from "../../common/images/chicken.png";
import BannerWarning from "../CommonComponents/BannerWarning";

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
                <input onChange={(e) => {props.changeStreet(e.target.value)}}
                       value={props.street || ''}
                       placeholder={"Улица"}
                       type="text"
                       className={s.adressForm_from_input}
                       style={props.errorsMethodsDelivery[0] ? {border: "1px solid red"} : {border: "inherit"}}
                />
                <input onChange={(e) => {props.changeHouse(e.target.value)}}
                       value={props.house}
                        placeholder={"Дом/корпус"}
                        type="number"
                        className={s.adressForm_from_input}
                       style={props.errorsMethodsDelivery[1] ? {border: "1px solid red"} : {border: "inherit"}}
                />
                <input  onChange={(e) => {props.changeFlat(e.target.value)}}
                        value={props.flat}
                        placeholder={"Квартира"}
                        type="number"
                        className={s.adressForm_from_input}
                        style={props.errorsMethodsDelivery[2] ? {border: "1px solid red"} : {border: "inherit"}}
                />
              </div>
              <button onClick={() => {
                props.checkMethodDelivery(1);
                if(props.errorsMethodsDelivery.every(el => el === "")){
                  props.setStateBasketTabOne(false);
                  props.setStateBasketTabTwo(true);
                }
              }}
                  className={s.adressForm_form_submit}>Далее</button>
            </div>
          </div>
        </div>
        <div style={statusYourself ? {display: "block"} : {display: "none"}}
             className={s.basketMethods_block}>
          <BannerWarning
            title={"С уважением, 'АЛЕЛЬ АГРО'"}
            text={"К сожалению, ни в одном из наших филиалов нет в наличии комплекта\n" +
            "        продуктов по Вашему заказу. Поэтому предлагаем Вам оформить доставку.\n" +
            "        Наш курьер заедет в несколько филиалов и соберёт Ваш заказ."}
          />
        </div>
      </div>
  );
}

export default BasketMethodsDelivery;