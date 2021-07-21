import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import s from "./commonStyles.module.css";
import { ReactComponent as HeartCard } from './../../common/images/heart-card.svg';

import product_1 from './../../common/images/product-1.png';

const ProductAddCart = (props) => {
  useEffect(() => {
    props.changeWeight(props.productId, 0);
  },[]);
  return (
      <div className={s.CardTypeTwo} style={{marginLeft: props.marginLeft, maxWidth: props.maxWidth}}>
        <div className={s.CardTypeTwo_images}>
          <img src={product_1} alt="product-1" className={s.CardTypeTwo_images_img}/>
          {
            props.stateProduct.isNew ?
              <span className={s.CardTypeTwo_images_status}>{props.staticContent.textIsNew}</span> :
              ""
          }
          <span className={s.CardTypeTwo_images_like} onClick={() => {
            props.toggleLike(props.productId);
          }}>
            <span className={s.CardTypeTwo_images_like_img}>
              <HeartCard className={props.stateProduct.isLike ? "heart_card" : ""}/>
            </span>
          </span>
        </div>
        <div className={s.CardTypeTwo_content}>
          <h2 className={s.CardTypeTwo_content_title}>{props.product.name}</h2>
          <p className={s.CardTypeTwo_content_status}
             style={props.stateProduct.isInStock ? {color: "#27AE60"} : {color: "#D00800"}}>
            {props.stateProduct.isInStock ? props.staticContent.textStock
              : props.staticContent.textNotIsStock}</p>
          <div className={s.CardTypeTwo_content_btns}>
            {props.product.volume.map((el, id) => {

              return <button key={id} style={props.stateProduct.isActiveVolume[id] ?
                {backgroundColor: "#E5F7E9", color: "#27AE60"} :
                {backgroundColor: "inherit"}}
                             className={s.CardTypeTwo_content_btn}
                             onClick={() => {
                               props.changeWeight(props.productId, id);
                             }}>{el + " кг"}</button>
            })}
          </div>
          <button onClick={() => {
            let activeWeight = 0;
            props.product.volume.forEach((el, id) => {
              if(props.stateProduct.isActiveVolume[id]){
                activeWeight = el;
              }
            });
            props.addProducts({
              id: props.product.id,
              name: props.product.name,
              quantity: 1,
              weight: activeWeight,
              price: +props.stateProduct.price,
              photo: props.product.photos[0],
              sum: +props.stateProduct.price,
            });
          }}
            className={s.CardTypeTwo_content_addBasket}>
            {`${props.staticContent.textCartButton} ${props.stateProduct.price}`} ₸
          </button>
        </div>
      </div>
  );
}





export default ProductAddCart;