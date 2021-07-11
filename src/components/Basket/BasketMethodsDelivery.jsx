import React, {useState} from "react";
import s from "./Basket.module.css";

const BasketMethodsDelivery = () => {
  const [statusDelivery, setStatusDelivery] = useState(true);
  const [statusYourself, setStatusYourSelf] = useState(false);


  return(
      <div className={s.basketMethods}>
        <div className={s.basketMethods_tabs}>
          <button onClick={() => {
            setStatusDelivery(true);
            setStatusYourSelf(false);
          }}
              className={`${s.basketMethods_tabs_link}
                  ${ statusDelivery ? s.active : ""}`}>Доставка</button>
          <button onClick={() => {
            setStatusDelivery(false);
            setStatusYourSelf(true);
          }}
              className={`${s.basketMethods_tabs_link} 
                  ${ statusYourself ? s.active : ""}`}>Самовывоз из магазина</button>
        </div>
        <div style={statusDelivery ? {display: "block"} : {display: "none"}}
            className={s.basketMethods_block}>
          first
        </div>
        <div style={statusYourself ? {display: "block"} : {display: "none"}}
            className={s.basketMethods_block}>
          second
        </div>
      </div>
  );
}

export default BasketMethodsDelivery;