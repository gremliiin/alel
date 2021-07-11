import React from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import s from "./commonStyles.module.css";
import {NavLink} from "react-router-dom";

import recipe_1 from './../../common/images/recipe-1.png';
import clock from './../../common/images/u_clock.svg';
import fire from './../../common/images/u_fire.svg';

const CardTypeThree = ({title}) => {

  if(title.length > 32) {
    title = title.substr(0, 32 - 4) + "...";
  }

  return(
      <NavLink to={"/Basket"} className={s.CardTypeThree}>
        <div className={s.CardTypeThree_image}>
          <img className={s.CardTypeThree_image_img} src={recipe_1} alt="cardtypethree" />
        </div>
        <div className={s.CardTypeThree_content}>
          <h2 className={s.CardTypeThree_content_title}>{title}</h2>
          <div className={s.CardTypeThree_info}>
            <p className={s.CardTypeThree_info_text}>
              40-50 мин
              <span className={s.before}>
                <img src={clock} alt="time" className={s.CardTypeThree_info_text_img}/>
              </span>
            </p>
            <p className={s.CardTypeThree_info_text}>
              137 ккал
              <span className={s.before}>
                <img src={fire} alt="fire" className={s.CardTypeThree_info_text_img}/>
              </span>
            </p>
          </div>
        </div>
      </NavLink>
  );
}

export default CardTypeThree;