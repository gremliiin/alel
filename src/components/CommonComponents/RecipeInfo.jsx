import React from "react";
import s from "./commonStyles.module.css";
import {ReactComponent as Clock} from "../../common/images/u_clock.svg";
import {ReactComponent as Fire} from "../../common/images/u_fire.svg";



const RecipeInfo = (props) => {

  const CardTypeThree_info_text_img = {
      fill: props.color,
  }

  return(
    <div className={s.CardTypeThree_info}>
      <p className={s.CardTypeThree_info_text} style={{color: props.color}}>
        {props.time}
        <span className={s.before}>
                <Clock style={CardTypeThree_info_text_img}/>
              </span>
      </p>
      <p className={s.CardTypeThree_info_text} style={{color: props.color}}>
        {props.calorie + " " + props.moreInfo}
        <span className={s.before}>
                <Fire style={CardTypeThree_info_text_img}/>
              </span>
      </p>
    </div>
  );
}

export default RecipeInfo;