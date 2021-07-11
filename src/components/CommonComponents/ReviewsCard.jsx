import React from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import s from "./commonStyles.module.css";
import { ReactComponent as Star } from '../../common/images/fi_star.svg';

import avatar from "../../common/images/reviews_avatar_1.png";

let rattingLevel = 3.5;


const ReviewsCard = () => {
  return (
      <div className={s.reviewscard}>
        <div className={s.reviewscard_head}>
          <div className={s.reviewscard_head_info}>
            <div className={s.reviewscard_head_ava}>
              <img src={avatar} alt="avatar" className={s.reviewscard_head_ava_img}/>
            </div>
            <div className={s.reviewscard_head_description}>
              <span className={s.reviewscard_head_name}>Борис Рябов</span>
              <span className={s.reviewscard_head_status}>Покупатель</span>
            </div>
          </div>
          <div className={s.reviewscard_head_ratting}>
            <span className={s.reviewscard_head_stars}>
              <Star className={rattingLevel < 1 ? "empty_star" : ""} />
              <Star className={rattingLevel < 2 ? "empty_star" : ""} />
              <Star className={rattingLevel < 3 ? "empty_star" : ""}/>
              <Star className={rattingLevel < 4 ? "empty_star" : ""}/>
              <Star className={rattingLevel < 5 ? "empty_star" : ""}/>
            </span>
          </div>
          <div className={s.reviewscard_head_stars_adaptive}>
              <span className={s.reviewscard_head_stars_adaptive_rattingLevel}>
                <Star className={rattingLevel < 1 ? `empty_star ${s.star}` : `${s.star}`} /> {rattingLevel}
              </span>
          </div>
        </div>
        <div className={s.reviewscard_content}>
          <div className={s.reviewscard_content_message}>
            Все очень просто и быстро, рекомендую всем данный сайт.
          </div>
          <div className={s.reviewscard_content_date}>
            13 июня 2020
          </div>
        </div>
      </div>
  );
}

export default ReviewsCard;