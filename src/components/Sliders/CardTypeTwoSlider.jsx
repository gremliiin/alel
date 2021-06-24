import React, {useState, Component} from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import s from "./../Main/Main.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavLink} from "react-router-dom";
import Banner from "../CommonComponents/Banner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardTypeTwo from "../CommonComponents/CardTypeTwo";

class CardTypeTwoSlider extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    }

    return(
        <div className={s.container_slider} style={{position: "relative"}}>
          <Slider ref={c => (this.slider = c)} {...settings}>
            <CardTypeTwo />
            <CardTypeTwo />
            <CardTypeTwo />
            <CardTypeTwo />
            <CardTypeTwo />
            <CardTypeTwo />
            <CardTypeTwo />
            <CardTypeTwo />
          </Slider>
          <button className="button slider_btn prev two" onClick={this.previous}>
          </button>
          <button className="button slider_btn next two" onClick={this.next}>
          </button>
        </div>
    );
  }

}

export default CardTypeTwoSlider;