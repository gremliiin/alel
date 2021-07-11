import React from "react";
import s from "./commonStyles.module.css";

import filterDown from "../../common/images/fi_chevron-down.svg";
import checkbox from "../../common/images/fi_check.svg";
import arrow from "../../common/images/arrow_link_green.svg";

const Sidebar = (props) => {
  return (
      <div className={s.sidebar}>
        <button onClick={() => {props.setStatusSidebar(false)}} className={s.sidebar_stepBefore}>
          <span className={s.sidebar_stepBefore_btn}>{props.sidebarStaticContent.textSidebarStepbefore}</span>
          <span className={s.before}>
            <img className={s.sidebar_stepBefore_arrow} src={arrow} alt="arrow"/>
          </span>
        </button>
        <div className={s.sidebar_filters}>
          <div className={s.sidebar_filters_block}>
            <button className={s.sidebar_filters_title}>
              {props.sidebarStaticContent.textTypeOfProducts}
              <span className={s.before}>
                <img src={filterDown} alt="arrow"/>
              </span>
            </button>
            <div className={s.sidebar_filters_checkbox}>
              {props.typeOfProductsMenu.map((el, id) => {
                return <label onClick={() => {props.setCheckTypeOfProducts(id)}} key={id}
                              className={s.checkbox_block}>
                        <span className={s.checkbox_falseInput}>
                          <span style={el.isCheck ? {display: "block"} : {display: "none"}} className={s.before}>
                            <img src={checkbox} alt="arrow"/>
                          </span>
                        </span>
                        <span className={s.checkbox_title}>{el.title}</span>
                      </label>
              })}

            </div>
          </div>

          <div className={s.sidebar_filters_block}>
            <button className={s.sidebar_filters_title}>
              {props.sidebarStaticContent.textChoosePrices}
              <span className={s.before}>
                <img src={filterDown} alt="arrow"/>
              </span>
            </button>
            <div className={s.sidebar_filters_fromto}>
              <div className={s.sidebar_filters_inputs}>
                <span className={s.sidebar_filters_inputs_title}>{props.sidebarStaticContent.textFrom}</span>
                <input onChange={(e) => {props.changeChoosePricesFrom(e.target.value)}}
                       onFocus={(e) => {
                         e.target.value = props.choosePrices.from
                       }}
                       onBlur={(e) => {
                         e.target.value =  props.choosePrices.to < 0 || props.choosePrices.from === "" ? props.choosePrices.from : props.choosePrices.from + " ₸"
                       }}
                       value={props.choosePrices.from} type="text" className={s.sidebar_filters_input} />
              </div>
              <span className={s.sidebar_filters_line}></span>
              <div className={s.sidebar_filters_inputs}>
                <span className={s.sidebar_filters_inputs_title}>{props.sidebarStaticContent.textTo}</span>
                <input onChange={(e) => {props.changeChoosePricesTo(e.target.value)}}
                       onFocus={(e) => {
                         e.target.value = props.choosePrices.to
                       }}
                       onBlur={(e) => {
                             e.target.value =  props.choosePrices.to < 0 || props.choosePrices.to === "" ? props.choosePrices.to : props.choosePrices.to + " ₸"
                       }}
                    value={props.choosePrices.to} type="text" className={s.sidebar_filters_input} />
              </div>
            </div>
          </div>

          <div className={s.sidebar_filters_block}>
            <button className={s.sidebar_filters_title}>
              {props.sidebarStaticContent.textCalorieValue}
              <span className={s.before}>
                <img src={filterDown} alt="arrow"/>
              </span>
            </button>
            <div className={s.sidebar_filters_fromto}>
              <div className={s.sidebar_filters_inputs}>
                <span className={s.sidebar_filters_inputs_title}>{props.sidebarStaticContent.textFrom}</span>
                <input onChange={(e) => {props.changeCalorieValueFrom(e.target.value)}}
                    value={props.calorieValue.from} type="number" className={s.sidebar_filters_input} />
              </div>
              <span className={s.sidebar_filters_line}></span>
              <div className={s.sidebar_filters_inputs}>
                <span className={s.sidebar_filters_inputs_title}>{props.sidebarStaticContent.textTo}</span>
                <input onChange={(e) => {props.changeCalorieValueTo(e.target.value)}}
                       value={props.calorieValue.to} type="number" className={s.sidebar_filters_input} />
              </div>
            </div>
          </div>
          <div className={s.sidebar_filters_block}>
            <button className={s.sidebar_filters_title}>
              {props.sidebarStaticContent.textKilos}
              <span className={s.before}>
                <img src={filterDown} alt="arrow"/>
              </span>
            </button>
            <div className={s.sidebar_filters_checkbox}>
              {props.kilos.map((el, id) => {
                return <label onClick={() => {props.setCheckKilos(id)}} key={id}
                              className={s.checkbox_block}>
                        <span className={s.checkbox_falseInput}>
                          <span style={el.isCheck ? {display: "block"} : {display: "none"}} className={s.before}>
                            <img src={checkbox} alt="arrow"/>
                          </span>
                        </span>
                  <span className={s.checkbox_title}>{el.title + " кг"} </span>
                </label>
              })}

            </div>
          </div>
        </div>
        <button onClick={() => {props.setStatusSidebar(false)}}
            className={s.sidebar_sendChanges}>{props.sidebarStaticContent.textSidebarSendBtn}</button>
      </div>
  );
}

export default Sidebar;