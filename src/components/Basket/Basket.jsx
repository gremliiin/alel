import React from "react";
import s from "./Basket.module.css";
import sCatalogue from "./../Catalogue/Catalogue.module.css";
import Container from "react-bootstrap/Container";
import {NavLink} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import arrowLink from "../../common/images/arrow_link_green.svg";
import BasketCart from "./BasketCart";
import BasketMain from "./BasketMain";
import BasketSuccessSubmit from "./BasketSuccessSubmit";

const Basket = (props) => {

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
              {props.ordering.isSubmit ? <BasketSuccessSubmit /> :
              <BasketMain
                ordering={props.ordering}
                changeStreet = {props.changeStreet }
                changeHouse = {props.changeHouse}
                changeFlat = {props.changeFlat}
                errorsMethodsDelivery = {props.ordering.errorsMethodsDelivery}
                checkMethodDelivery = {props.checkMethodDelivery}
                changeName = {props.changeName}
                changePhone = {props.changePhone}
                changeEmail = {props.changeEmail}
                changeDeliveryDate={props.changeDeliveryDate}
                checkContactsInfo = {props.checkContactsInfo}
                changeMethodPayment = {props.changeMethodPayment}
                doCheckout = {props.doCheckout}
              /> }
            </Col>
            <Col lg={4}>
              <div className={s.basket_yourOrder}>
                <h2 className={s.basket_yourOrder_title}>Ваш заказ:</h2>
                <ul className={s.basket_yourOrder_cart}>
                  {props.products.map((el, id) => {
                    return <BasketCart
                      key={id}
                      productId = {id}
                      product = {el}
                      deleteProducts = {props.deleteProducts}
                      addProducts = {props.addProducts}
                      deleteOneProduct = {props.deleteOneProduct}
                    />
                  })}
                </ul>

                <div className={s.basket_yourOrder_total}>
                  <div className={s.basket_yourOrder_total_titleBlock}>
                    <span className={s.basket_yourOrder_total_titleText}>Итого:</span>
                    <span className={s.basket_yourOrder_total_titlePrice}>{props?.totalPrice} ₸</span>
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