import React from "react";
import s from "./Basket.module.css";
import orderCartImg from "../../common/images/order_cart_img.png";
import remove from "../../common/images/fi_remove.png";

const BasketCart = (props) => {
  return(
    <li className={s.basket_yourOrder_cart_item}>
      <div className={s.basket_yourOrder_cart_image}>
        <img src={orderCartImg} alt="orderCart"/>
      </div>
      <div className={s.basket_yourOrder_cart_content}>
        <h3 className={s.basket_yourOrder_cart_content_title}>{props?.product?.name} ({props?.product?.weight})</h3>
        <div className={s.basket_yourOrder_cart_btns}>
          <span className={s.basket_yourOrder_cart_price}>{props?.product?.price} ₸</span>
          <button onClick={() => {
            props.deleteOneProduct(props.product.id, props.product.weight, props.product.price);
          }}
            className={s.basket_yourOrder_cart_minus}>-</button>
          <span className={s.basket_yourOrder_cart_total}>{props?.product?.quantity}</span>
          <button onClick={() => {
            props.addProducts({
              ...props.product
            });
          }}
            className={s.basket_yourOrder_cart_plus}>+</button>
        </div>
      </div>
      <div onClick={() => {props.deleteProducts(props.product.id, props.product.weight)}}
           className={s.basket_yourOrder_cart_remove}>
        <img src={remove} alt=""/>
      </div>
    </li>
  );
}

export default BasketCart;