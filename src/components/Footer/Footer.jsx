import React from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import s from "./Footer.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavLink} from "react-router-dom";

import logo from './../../common/images/logo.png';
import master_card from './../../common/images/master_card.png';
import visa from './../../common/images/visa.png';
import amex from './../../common/images/amex.png';
import facebook from './../../common/images/facebook_footer.svg';
import instagramm from './../../common/images/instagram_footer.svg';
import youtube from './../../common/images/youtube_footer.svg';
import headphones from './../../common/images/fi_headphones.svg';


const Footer = () => {
  return (
      <footer className={s.footer}>
        <Container>
          <div className={s.footer_top}>
            <Row>
              <Col lg={2}>
                <div className={s.footer_logo}>
                  <img className={s.footer_logo_img} src={logo} alt="logo"/>
                </div>
              </Col>
              <Col lg={4}>
                <div className={s.footer_menu}>
                  <h2 className={s.footer_menu_title}>Меню</h2>
                  <nav className={s.footer_menu_nav}>
                    <ul className={s.footer_list}>
                      <li className={s.footer_item}>
                        <NavLink to={"/"} className={s.footer_link}>Главная</NavLink>
                      </li>
                      <li className={s.footer_item}>
                        <NavLink to={"/public_scam"} className={s.footer_link}>Публичная аферта</NavLink>
                      </li>

                    </ul>
                    <ul className={s.footer_list}>

                      <li className={s.footer_item}>
                        <NavLink to={"comment"} className={s.footer_link}>Отзывы</NavLink>
                      </li>
                      <li className={s.footer_item}>
                        <NavLink to={"/contacts"} className={s.footer_link}>Контакты</NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Col>
              <Col lg={4}>
                <div className={s.footer_payment}>
                  <h2 className={s.footer_payment_title}>Способ оплаты</h2>
                  <div className={s.footer_payment_cards}>
                    <ul className={s.footer_payment_list}>
                      <li className={s.footer_payment_item}><a href="#"
                                                               className={s.footer_payment_link}><img
                          src={master_card} alt="payment" className={s.footer_payment_img}/></a></li>
                      <li className={s.footer_payment_item}><a href="#"
                                                               className={s.footer_payment_link}><img
                          src={visa} alt="payment" className={s.footer_payment_img}/></a></li>
                      <li className={s.footer_payment_item}><a href="#"
                                                               className={s.footer_payment_link}><img
                          src={amex} alt="payment" className={s.footer_payment_img}/></a></li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={2}>
                <div className={s.footer_contacts}>
                  <h2 className={s.footer_contacts_title}>Контакты</h2>
                  <div className={s.footer_contacts_contact}>
                    <a href="tel:+77272254360">+7 (727)225 43 60</a>
                  </div>
                  <div className={s.footer_contacts_socials}>

                    <a href="#"><img src={facebook} alt="social-item"
                                     className={s.footer_contacts_social}/></a>
                    <a href="#"><img src={instagramm} alt="social-item"
                                     className={s.footer_contacts_social}/></a>
                    <a href="#"><img src={youtube} alt="social-item"
                                     className={s.footer_contacts_social}/></a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className={s.footer_bottom}>
            <span className={s.footer_bottom_info}>www.alelagro.kz © 1998-2021. Все права защищены</span>
            <NavLink to={"/contacts"}>Связаться с оператором
              <div className={s.before}><img className={s.conacts_icon} src={headphones} alt=""/></div>
            </NavLink>
          </div>
        </Container>
      </footer>
  );
}

export default Footer;