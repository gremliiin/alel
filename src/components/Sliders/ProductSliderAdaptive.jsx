import React from "react";
import sCommon from "../CommonComponents/commonStyles.module.css";
import {ReactComponent as HeartCard} from "../../common/images/heart-card.svg";
import Slider from "react-slick";
import s from "../Product/Product.module.css";
import sliderImage from "../../common/images/product_image.png";

class ProductSliderAdaptive extends React.Component{
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      dotsClass: 'product_slider_dots',
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return(
        <div style={{position: "relative"}}>
          <span style={{zIndex: "1"}} className={sCommon.CardTypeTwo_images_status}>Новинка</span>
          <span style={{zIndex: "1"}} className={sCommon.CardTypeTwo_images_like}>
            <span className={sCommon.CardTypeTwo_images_like_img}>
              <HeartCard/>
            </span>
          </span>
          <Slider {...settings}>
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
        </div>
    );
  }
}

export default ProductSliderAdaptive;