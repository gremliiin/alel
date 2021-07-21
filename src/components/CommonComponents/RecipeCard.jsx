import React from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import s from "./commonStyles.module.css";
import {NavLink} from "react-router-dom";

import recipe_1 from './../../common/images/recipe-1.png';
import RecipeInfo from "./RecipeInfo";

const RecipeCard = ({title}) => {

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
          <RecipeInfo
            time={"40-50 мин"}
            calorie={"137 ккал"}
            moreInfo={""}
            color={"#808080"}
          />
        </div>
      </NavLink>
  );
}

export default RecipeCard;