import React from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import s from "./../Main/Main.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewsCard from "../CommonComponents/ReviewsCard";

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
            <ReviewsCard />
            <ReviewsCard />
            <ReviewsCard />
            <ReviewsCard />
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