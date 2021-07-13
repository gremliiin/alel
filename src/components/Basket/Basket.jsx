import React, {useState} from "react";
import s from "./Basket.module.css";
import sCatalogue from "./../Catalogue/Catalogue.module.css";
import Container from "react-bootstrap/Container";
import {NavLink} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {ReactComponent as ArrowBtn} from "../../common/images/arrow-down.svg";
import orderCartImg from "../../common/images/order_cart_img.png";
import remove from "../../common/images/fi_remove.png";
import arrowLink from "../../common/images/arrow_link_green.svg";
import BasketMethodsDelivery from "./BasketMethodsDelivery";
import paying_1  from "../../common/images/paying_1.png";
import paying_2  from "../../common/images/paying_2.png";
import paying_3  from "../../common/images/visa_cart.png";

const Basket = () => {

  const activeStylesItem = {
    borderColor: "#27AE60",
    color: "#27AE60"
  }

  const activeStylesText = {
    color: "#2B2A29"
  }

  const activeStylesArrow = {
    transform: "translateY(-50%) rotate(-180deg)"
  }

  const [stateBasketTabOne, setStateBasketTabOne] = useState(true);
  const [stateBasketTabTwo, setStateBasketTabTwo] = useState(false);
  const [stateBasketTabThree, setStateBasketTabThree] = useState(false);

  return (
      <div className={s.basket}>
        <Container>
          <div className={sCatalogue.catalogue_breadCrumbs}>
             <NavLink to={"/"}>Главная</NavLink> /
             <NavLink to={"/catalogue"}> Мясо птицы</NavLink> /
             <NavLink to={"/cart"}> Куриное бедро</NavLink> /
            <span> Корзина</span>
          </div>
          <h1 className={s.basket_title}>Корзина</h1>

          <Row style={{marginTop: "30px"}}>
            <Col lg={8}>
              <div className={s.basket_main}>
                <div className={s.basket_main_tab}>
                  <button className={s.basket_main_tab_btn}>
                    <span style={ stateBasketTabOne ? activeStylesItem : {} } className={s.basket_main_tab_item}>1</span>
                    <span style={stateBasketTabOne ? activeStylesText : {}} className={s.basket_main_tab_title}>Способ доставки</span>
                    <span style={stateBasketTabOne ? activeStylesArrow : {}} className={s.basket_main_tab_arrow}>
                      <span className={s.before}>
                       <ArrowBtn className={s.basket_main_tab_arrow_img} />
                      </span>
                    </span>
                  </button>
                  <div style={stateBasketTabOne ? {display: "block"} : {display: "none"}} className={s.basket_main_tab_block}>
                    <BasketMethodsDelivery
                        setStateBasketTabOne={setStateBasketTabOne}
                        setStateBasketTabTwo={setStateBasketTabTwo}
                    />
                  </div>
                </div>

                <div className={s.basket_main_tab}>
                  <button className={s.basket_main_tab_btn}>
                    <span style={ stateBasketTabTwo ? activeStylesItem : {} } className={s.basket_main_tab_item}>2</span>
                    <span style={ stateBasketTabTwo ? activeStylesText : {} } className={s.basket_main_tab_title}>Контактная информация</span>
                    <span style={ stateBasketTabTwo ? activeStylesArrow : {} } className={s.basket_main_tab_arrow}>
                      <span className={s.before}>
                       <ArrowBtn className={s.basket_main_tab_arrow_img} />
                      </span>
                    </span>
                  </button>
                  <div style={stateBasketTabTwo ? {display: "block"} : {display: "none"}} className={s.basket_main_tab_block}>
                    <div className={s.contactInfo}>
                      <div className={s.contactInfo_inputs}>
                        <input placeholder="Имя" type="text" className={s.contactInfo_input}/>
                        <input placeholder="Номер телефона" type="text" className={s.contactInfo_input}/>
                        <input placeholder="E-mail" type="text" className={s.contactInfo_input}/>
                        <input placeholder="Дата и время доставки" type="date" className={s.contactInfo_input}/>
                      </div>
                      <div className={s.contactInfo_btns}>
                        <button onClick={() => {
                          setStateBasketTabOne(true);
                          setStateBasketTabTwo(false);
                        }}
                            className={s.contactInfo_prev}>Назад</button>
                        <button onClick={() => {
                          setStateBasketTabTwo(false);
                          setStateBasketTabThree(true);
                        }}
                            className={s.contactInfo_submit}>Далее</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={s.basket_main_tab}>
                  <button className={s.basket_main_tab_btn}>
                    <span style={ stateBasketTabThree ? activeStylesItem : {} } className={s.basket_main_tab_item}>3</span>
                    <span style={ stateBasketTabThree ? activeStylesText : {} } className={s.basket_main_tab_title}>Метод оплаты</span>
                    <span style={ stateBasketTabThree ? activeStylesArrow : {} } className={s.basket_main_tab_arrow}>
                      <span className={s.before}>
                       <ArrowBtn className={s.basket_main_tab_arrow_img} />
                      </span>
                    </span>
                  </button>
                  <div style={stateBasketTabThree ? {display: "block"} : {display: "none"}}  className={s.basket_main_tab_block}>
                    <div className={s.methodPay}>
                      <div className={s.methodPay_carts}>
                        <div className={s.methodPay_cart}>
                          <span className={s.methodPay_cart_text}>Наличными курьеру</span>
                          <span className={s.before}>
                            <img src={paying_1} alt="img"/>
                          </span>
                        </div>
                        <div className={s.methodPay_cart}>
                          <span className={s.methodPay_cart_text}>Картой при получении</span>
                          <span className={s.before}>
                            <img src={paying_2} alt="img"/>
                          </span>
                        </div>
                        <div className={s.methodPay_cart}>
                          <span className={s.methodPay_cart_text}>Онлайн оплата</span>
                          <span className={s.before}>
                            <img src={paying_3} alt="img"/>
                          </span>
                        </div>
                      </div>
                      <button className={s.methodPay_form_submit}>Оформить заказ</button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className={s.basket_yourOrder}>
                <h2 className={s.basket_yourOrder_title}>Ваш заказ:</h2>
                <ul className={s.basket_yourOrder_cart}>
                  <li className={s.basket_yourOrder_cart_item}>
                    <div className={s.basket_yourOrder_cart_image}>
                      <img src={orderCartImg} alt="orderCart"/>
                    </div>
                    <div className={s.basket_yourOrder_cart_content}>
                      <h3 className={s.basket_yourOrder_cart_content_title}>Куриное бедро (0,7 кг)</h3>
                      <div className={s.basket_yourOrder_cart_btns}>
                        <span className={s.basket_yourOrder_cart_price}>1290 ₸</span>
                        <button className={s.basket_yourOrder_cart_minus}>-</button>
                        <span className={s.basket_yourOrder_cart_total}>1</span>
                        <button className={s.basket_yourOrder_cart_plus}>+</button>
                      </div>
                    </div>
                    <div className={s.basket_yourOrder_cart_remove}>
                      <img src={remove} alt=""/>
                    </div>
                  </li>
                  <li className={s.basket_yourOrder_cart_item}>
                    <div className={s.basket_yourOrder_cart_image}>
                      <img src={orderCartImg} alt="orderCart"/>
                    </div>
                    <div className={s.basket_yourOrder_cart_content}>
                      <h3 className={s.basket_yourOrder_cart_content_title}>Куриное бедро (0,7 кг)</h3>
                      <div className={s.basket_yourOrder_cart_btns}>
                        <span className={s.basket_yourOrder_cart_price}>1290 ₸</span>
                        <button className={s.basket_yourOrder_cart_minus}>-</button>
                        <span className={s.basket_yourOrder_cart_total}>1</span>
                        <button className={s.basket_yourOrder_cart_plus}>+</button>
                      </div>
                    </div>
                    <div className={s.basket_yourOrder_cart_remove}>
                      <img src={remove} alt=""/>
                    </div>
                  </li>
                  <li className={s.basket_yourOrder_cart_item}>
                    <div className={s.basket_yourOrder_cart_image}>
                      <img src={orderCartImg} alt="orderCart"/>
                    </div>
                    <div className={s.basket_yourOrder_cart_content}>
                      <h3 className={s.basket_yourOrder_cart_content_title}>Куриное бедро (0,7 кг)</h3>
                      <div className={s.basket_yourOrder_cart_btns}>
                        <span className={s.basket_yourOrder_cart_price}>1290 ₸</span>
                        <button className={s.basket_yourOrder_cart_minus}>-</button>
                        <span className={s.basket_yourOrder_cart_total}>1</span>
                        <button className={s.basket_yourOrder_cart_plus}>+</button>
                      </div>
                    </div>
                    <div className={s.basket_yourOrder_cart_remove}>
                      <img src={remove} alt=""/>
                    </div>
                  </li>
                </ul>

                <div className={s.basket_yourOrder_total}>
                  <div className={s.basket_yourOrder_total_titleBlock}>
                    <span className={s.basket_yourOrder_total_titleText}>Итого:</span>
                    <span className={s.basket_yourOrder_total_titlePrice}>4560 ₸</span>
                  </div>
                  <div className={s.basket_yourOrder_total_textBlock}>
                    <span className={s.basket_yourOrder_total_text}>Цена без учета стоимости доставки</span>
                    <NavLink className={s.basket_yourOrder_total_link} to={"/catalogue"}>Дополнить заказ</NavLink>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row style={{marginTop: "30px"}}>
            <Col md={8}></Col>
            <Col md={4}>
              <div className={s.basket_needHelp}>
                <h3 className={s.basket_needHelp_title}>Нужна помощь?</h3>
                <NavLink className={s.basket_needHelp_link} to={"/"}>
                  Правила онлайн оплаты
                  <span className={sCatalogue.before}>
                    <img src={arrowLink} alt=""/>
                  </span>
                </NavLink>
                <NavLink className={s.basket_needHelp_link} to={"/"}>
                  Политика конфиденциальности
                  <span className={sCatalogue.before}>
                    <img src={arrowLink} alt=""/>
                  </span>
                </NavLink>
                <NavLink className={s.basket_needHelp_link} to={"/"}>
                  Публичная оферта
                  <span className={sCatalogue.before}>
                    <img src={arrowLink} alt=""/>
                  </span>
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default Basket;