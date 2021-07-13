import React from "react";
import Slider from "react-slick";
import s from "../Product/Product.module.css";
import sCommon from "../CommonComponents/commonStyles.module.css";
import sliderImage from "../../common/images/product_image.png";
import {ReactComponent as SliderArrow} from "../../common/images/arrow_link_green.svg";
import {ReactComponent as HeartCard} from "../../common/images/heart-card.svg";

class ProductSlider extends React.Component {

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
      customPaging: function () {
        return (
            <div>
              <img src={sliderImage} alt="slider_image"/>
            </div>
        );
      },
      dots: true,
      dotsClass: "slick_pictures",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    }

    return (
        <div style={{position: "relative"}}>
          <span style={{zIndex: "1"}} className={sCommon.CardTypeTwo_images_status}>Новинка</span>
          <span style={{zIndex: "1"}} className={sCommon.CardTypeTwo_images_like}>
            <span className={sCommon.CardTypeTwo_images_like_img}>
              <HeartCard/>
            </span>
          </span>
          <Slider ref={c => (this.slider = c)} {...settings}>
            <div className={s.sliderMain}>
              <img src={sliderImage}/>
            </div>
            <div className={s.sliderMain}>
              <img src={sliderImage}/>
            </div>
            <div className={s.sliderMain}>
              <img src={sliderImage}/>
            </div>
          </Slider>
          <button className="button slider_product_btn prev" onClick={this.previous}>
            <span className="arrow_slider_btn prev">
              <SliderArrow />
            </span>
          </button>
          <button className="button slider_product_btn next" onClick={this.next}>
             <span className="arrow_slider_btn next">
              <SliderArrow />
             </span>
          </button>
        </div>
    );
  }
}

export default ProductSlider;