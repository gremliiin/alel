import React from "react";
import s from "./Product.module.css";
import Container from "react-bootstrap/Container";
import {changeWeightAC, toggleLikeAC} from "../../redux/ProductsReducer";
import {connect} from "react-redux";
import CardTypeTwo from "../CommonComponents/CardTypeTwo";
import sCatalogue from "../Catalogue/Catalogue.module.css";
import {NavLink} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sCommonStyles from "../CommonComponents/commonStyles.module.css";
import sBasket from "../Basket/Basket.module.css";
import arrowLink from "../../common/images/arrow_link_green.svg";
import ProductSlider from "../Sliders/ProductSlider";
import ProductSliderAdaptive from "../Sliders/ProductSliderAdaptive";

class Product extends React.Component {
  render() {
    return (
        <div className={s.product}>
          <Container>
            <div className={sCatalogue.catalogue_breadCrumbs}>
              <NavLink to={"/"}>Главная</NavLink> /
              <NavLink to={"/catalogue"}> Мясо птицы</NavLink> /
              <span> Куриное бедро</span>
            </div>
            <section className={s.product_main}>
              <Row>
                <Col lg={5}>
                  <div className={s.product_slider}>
                    <ProductSlider />
                  </div>
                  <div className={s.product_slider_adaptive}>
                    <ProductSliderAdaptive />
                  </div>

                </Col>
                <Col lg={7}>
                  <h1 className={s.product_title}>Куриное бедро </h1>
                  <span className={s.product_status}>В наличии</span>
                  <div className={s.product_description}>
                    <h2 className={s.product_description_title}>Описание:</h2>
                    <span className={s.product_description_text}>Часть  тушки , состоящая из бедренной кости с прилегающими к ней мышечной,
                      соединительной, жировыми тканями.</span>
                  </div>
                  <div className={s.product_composition}>
                    <ul className={s.product_composition_list}>
                      <li className={s.product_composition_item}>
                        <h4 className={s.product_composition_item_title}>Каллорийность на 100 г:</h4>
                        <span className={s.product_composition_item_text}>206</span>
                      </li>
                      <li className={s.product_composition_item}>
                        <h4 className={s.product_composition_item_title}>Белки:</h4>
                        <span className={s.product_composition_item_text}>16,5</span>
                      </li>
                      <li className={s.product_composition_item}>
                        <h4 className={s.product_composition_item_title}>Жиры:</h4>
                        <span className={s.product_composition_item_text}>14,3</span>
                      </li>
                      <li className={s.product_composition_item}>
                        <h4 className={s.product_composition_item_title}>Углеводы:</h4>
                        <span className={s.product_composition_item_text}>0,09</span>
                      </li>
                    </ul>
                  </div>
                  <div className={s.product_toggle}>
                    <h4 className={s.product_toggle_title}>Килограмм:</h4>
                    <div className={sCommonStyles.CardTypeTwo_content_btns}>
                      <button style={{backgroundColor: "#E5F7E9", color: "#27AE60"}}
                              className={sCommonStyles.CardTypeTwo_content_btn}>0,7 кг
                      </button>
                      <button style={{backgroundColor: "inherit"}}
                              className={sCommonStyles.CardTypeTwo_content_btn}>0,9 кг
                      </button>
                    </div>
                  </div>
                  <div className={s.product_submitBlock}>
                    <div className={s.product_submitBlock_count}>
                      <h4 className={s.product_submitBlock_title}>Количество:</h4>
                      <div className={s.product_submitBlock_count_btns}>
                        <div className={sBasket.basket_yourOrder_cart_btns}>
                          <button className={sBasket.basket_yourOrder_cart_minus}>-</button>
                          <span className={sBasket.basket_yourOrder_cart_total}>1</span>
                          <button className={sBasket.basket_yourOrder_cart_plus}>+</button>
                        </div>
                      </div>
                    </div>
                    <button className={s.product_submitBlock_submit}>В корзину за 1290 ₸</button>
                  </div>
                  <div className={s.product_recipes}>
                    <div className={sBasket.basket_needHelp}>
                      <h3 className={sBasket.basket_needHelp_title}>Что можно приготовить с “Куриное бедро”? </h3>
                      <NavLink className={sBasket.basket_needHelp_link} to={"/"}>
                        Курочка в сливочном соусе рецепт на сковороде
                        <span className={sCatalogue.before}>
                    <img src={arrowLink} alt="arrow"/>
                  </span>
                      </NavLink>
                      <NavLink className={sBasket.basket_needHelp_link} to={"/"}>
                        Курица, тушённая в сметанно-луковом соусе
                        <span className={sCatalogue.before}>
                    <img src={arrowLink} alt="arrow"/>
                  </span>
                      </NavLink>
                      <NavLink className={sBasket.basket_needHelp_link} to={"/"}>
                        Куриные бёдрышки, запечённые с сыром, под чесночным соусом
                        <span className={sCatalogue.before}>
                    <img src={arrowLink} alt="arrow"/>
                  </span>
                      </NavLink>
                    </div>
                  </div>
                </Col>
              </Row>
            </section>

            <section className={s.product_recommendations}>
              <h2 className={s.product_recommendations_title}>Также рекомендуем</h2>
              <div className={s.product_recommendations_products}>
                {this.props.products.map((el, id) => {
                  if (id < 4) {
                    return <CardTypeTwo
                        key={id}
                        productId={id}
                        maxWidth={"auto"}
                        marginLeft={0}
                        product={el}
                        toggleLike={this.props.toggleLikeAC}
                        staticContent={this.props.productsContent}
                        changeWeight={this.props.changeWeightAC}
                    />
                  }
                })}
              </div>
            </section>
          </Container>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsContent: state.products.staticContent,
    products: state.products.products,
  }
}

const mapDispatchToProps = {
  toggleLikeAC,
  changeWeightAC
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);