import React from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import s from "./FindModalResults.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import arrow_link_green from "../../common/images/arrow_link_green.svg";
import CardFindModal from "../CommonComponents/CardFindModal";

class FindModalResults extends React.Component {
  render() {
    return(
        <div className={s.find_modal_result}>
          <h2 className={s.find_modal_result_title}>Результаты поиска:</h2>
          <div className={s.find_modal_result_catalogue}>
            <div className={s.find_modal_result_catalogue_titles}>
              <span className={s.find_modal_result_descr}>Каталог (6)</span>
              <a className={s.find_modal_result_catalogue_showall}>
                Посмотреть все
                <span className={s.before}>
                  <img className={s.arrow_link} src={arrow_link_green} alt="arrow"/>
                </span>
              </a>
            </div>
            <div className={s.find_modal_result_catalogue_cards}>
                <CardFindModal />
                <CardFindModal />
                <CardFindModal />
                <CardFindModal />
            </div>
          </div>
          <div className={s.find_modal_result_another}>
            <div className={s.find_modal_result_another_titles}>
              <span className={s.find_modal_result_descr}>Другое (2)</span>
            </div>
            <a className={s.find_modal_result_another_btn}>
              Рецепты “Суп харчо”
              <span className={s.before}>
                  <img className={s.arrow_link} src={arrow_link_green} alt="arrow"/>
              </span>
            </a>
            <a className={s.find_modal_result_another_btn}>
              О нас
              <span className={s.before}>
                  <img className={s.arrow_link} src={arrow_link_green} alt="arrow"/>
              </span>
            </a>
          </div>
        </div>
    )
  }
}

export default FindModalResults;