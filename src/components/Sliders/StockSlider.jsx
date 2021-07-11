import React from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import s from "./../Main/Main.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardTypeOne from "../CommonComponents/CardTypeOne";

import chicken_meat_1 from './../../common/images/chicken-meat-1.png';
import chicken_meat_2 from './../../common/images/chicken-meat-2.png';

class StockSlider extends React.Component {
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

  render () {

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      centerPadding: "60px",
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }]
    };

    return (
        <div className={s.container_slider} style={{position: "relative"}}>
          <Slider ref={c => (this.slider = c)} {...settings}>
            <div key={1}>
              <CardTypeOne
                  id={1}
                  priceOld={1250}
                  priceNew={999}
                  image={chicken_meat_1}
                  title={"Цыпленок бройлера"}
                  text={"Новая цена"}
              />
            </div>

            <div key={2}>
              <CardTypeOne
                  id={1}
                  priceOld={990}
                  priceNew={690}
                  image={chicken_meat_2}
                  title={"Куриные ножки"}
                  text={"Новая цена"}
              />
            </div>

            <div key={3}>
              <CardTypeOne
                  id={1}
                  priceOld={1250}
                  priceNew={999}
                  image={chicken_meat_1}
                  title={"Цыпленок бройлера"}
                  text={"Новая цена"}
              />
            </div>

            <div key={4}>
              <CardTypeOne
                  id={1}
                  priceOld={990}
                  priceNew={690}
                  image={chicken_meat_2}
                  title={"Куриные ножки"}
                  text={"Новая цена"}
              />
            </div>
          </Slider>
          <button className="button slider_btn prev" onClick={this.previous}>
          </button>
          <button className="button slider_btn next" onClick={this.next}>
          </button>
        </div>
    );
  }

}

export default StockSlider;