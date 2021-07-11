import React from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import s from "./../Main/Main.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardTypeTwo from "../CommonComponents/CardTypeTwo";

class NewProductsSlider extends React.Component {
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
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
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
            {this.props.products.products.map((el, id) => {
              return <CardTypeTwo
                  maxWidth = {"255px"}
                  key={id}
                  productId={id}
                  marginLeft = {0}
                  product = {el}
                  toggleLike = {this.props.toggleLike}
                  staticContent = {this.props.products.staticContent}
                  changeWeight = {this.props.changeWeight}
              />
            })}
          </Slider>
          <button className="button slider_btn prev" onClick={this.previous}>
          </button>
          <button className="button slider_btn next" onClick={this.next}>
          </button>
        </div>
    );
  }

}

export default NewProductsSlider;