import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import s from "./commonStyles.module.css";
import Container from 'react-bootstrap/Container';
import {NavLink} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Banner = () => {
  return (
      <div className={s.banner}>
        <img src="/images/banner.png" alt="banner-image" className={s.banner_image_img}/>
        <img src="/images/banner-image-left.png" alt="banner-image-left" className={s.banner_image_left}/>
        <img src="/images/banner-image-right.png" alt="banner-image-right" className={s.banner_image_right}/>
        <Container>
          <Row>
            <Col lg={4}>
              <div className={s.banner_content}>
                <h2 className={s.banner_mini_title}>Качественная продукция</h2>
                <h2 className={s.banner_title}>Высокое качество мяса птицы.</h2>
                <p className={s.banner_text}>Сбалансированный корм растительного происхождения, отличные условия
                  содержания
                  птицы, высокая степень биологической безопасности.</p>
                <NavLink to={"/catalogue"} className={s.banner_btn}>Купить сейчас</NavLink>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
  );
}

export default Banner;