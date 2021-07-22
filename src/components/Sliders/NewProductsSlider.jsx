import React from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import s from "./../Main/Main.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductAddCart from "../CommonComponents/ProductAddCart";
import {changeWeightAC, getProductsByCategoryTC, toggleLikeAC} from "../../redux/ProductsReducer";
import {connect} from "react-redux";
import {addProductsAC} from "../../redux/BasketReducer";
import {ToggleNotificationStatusTC} from "../../redux/NotificationReducer";

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

  componentDidMount() {
    this.props.getProductsByCategoryTC(1);
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesPerRow: 1,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
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
            {
              this.props.products.products.map((el, id) => {
              return <ProductAddCart
                  maxWidth = {"255px"}
                  key={el.id}
                  productId={id}
                  marginLeft = {0}
                  product = {el}
                  stateProduct={this.props.products.stateProducts[id]}
                  toggleLike = {this.props.toggleLikeAC}
                  staticContent = {this.props.products.staticContent}
                  changeWeight = {this.props.changeWeightAC}
                  addProducts = {this.props.addProductsAC}
                  ToggleNotificationStatus = {this.props.ToggleNotificationStatusTC}
              />
            })
            }
          </Slider>
          <button className="button slider_btn prev" onClick={this.previous}>
          </button>
          <button className="button slider_btn next" onClick={this.next}>
          </button>
        </div>
    );
  }

}

const mapStateToProps = (state) => {
  return{
    products: state.products,
  }

}

const mapDispatchToProps = {
  toggleLikeAC,
  changeWeightAC,
  addProductsAC,
  getProductsByCategoryTC,
  ToggleNotificationStatusTC
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProductsSlider);