import React from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import s from "./commonStyles.module.css";
import { ReactComponent as HeartCard } from './../../common/images/heart-card.svg';

import product_1 from './../../common/images/product-1.png';

const CardTypeTwo = (props) => {
  return (
      <div className={s.CardTypeTwo} style={{marginLeft: props.marginLeft, maxWidth: props.maxWidth}}>
        <div className={s.CardTypeTwo_images}>
          <img src={product_1} alt="product-1" className={s.CardTypeTwo_images_img}/>
          {
            props.product.isNew ?
              <span className={s.CardTypeTwo_images_status}>{props.product.textIsNew}</span> :
              ""
          }
          <span className={s.CardTypeTwo_images_like} onClick={() => {
            props.toggleLike(props.productId);
          }}>
            <span className={s.CardTypeTwo_images_like_img}>
              <HeartCard className={props.product.isLike ? "heart_card" : ""}/>
            </span>
          </span>
        </div>
        <div className={s.CardTypeTwo_content}>
          <h2 className={s.CardTypeTwo_content_title}>{props.product.title}</h2>
          <p className={s.CardTypeTwo_content_status}
             style={props.product.isStock ? {color: "#27AE60"} : {color: "#D00800"}}>
            {props.product.isStock ? props.product.textStock
              : props.product.textNotIsStock}</p>
          <div className={s.CardTypeTwo_content_btns}>
            {props.product.weight.map((el, id) => {
              return <button key={id} style={el.active ? {backgroundColor: "#E5F7E9", color: "#27AE60"} : {backgroundColor: "inherit"}}
                             className={s.CardTypeTwo_content_btn}
                             onClick={() => {
                               props.changeWeight(props.productId, id);
                             }}>{el.title + " кг"}</button>
            })}
          </div>
          <button className={s.CardTypeTwo_content_addBasket}>
            {`${props.staticContent.textCartButton} ${props.product.currentPrice}`} ₸
          </button>
        </div>
      </div>
  );
}

export default CardTypeTwo;