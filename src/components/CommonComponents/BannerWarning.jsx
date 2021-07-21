import React from "react";
import s from "./commonStyles.module.css";
import notAvailable from "../../common/images/chicken.png";

const BannerWarning = (props) => {
  return(
    <div className={s.notAvailable}>
      <div className={s.notAvailable_image}>
        <img src={notAvailable} alt="notAvailable" className={s.notAvailable_img}/>
      </div>
      <p className={s.notAvailable_text}>{props.text}</p>
      <h2 className={s.notAvailable_title}>{props.title}</h2>
    </div>
  );
}

export default BannerWarning;