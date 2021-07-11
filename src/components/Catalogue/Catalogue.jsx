import React, {useState} from "react";
import s from "./Catalogue.module.css";
import {NavLink} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import btn_sort from "../../common/images/sort_btn.svg";
import arrow_sort from "../../common/images/arrow_sort.svg";
import btn_filters from "../../common/images/fi_filters.svg";
import CardTypeTwo from "../CommonComponents/CardTypeTwo";
import Sidebar from "../CommonComponents/Sidebar";
import DropdownModal from "../Header/DropdownModal";
import section_image_1 from "../../common/images/section-image-1.png";
import section_image_2 from "../../common/images/section-image-2.png";


const Catalogue = (props) => {

  const [statusMenuSorting, setStatusMenuSorting] = useState(false);
  const [statusSidebar, setStatusSidebar] = useState(false);

  const cancelDropDowns = () => {
    setStatusMenuSorting(false);
  }

  return (
      <div className={s.catalogue}>
        <DropdownModal
            indexZ={1}
            cancelDropDowns={cancelDropDowns}
            isBackgroundModal={statusMenuSorting}
            opacity={0}
            color={"inherit"}
        />
        <div style={statusSidebar ? {transform: "translateX(0)"} :
            {transform: "translateX(-300%)"}} className={s.sidebar_block_adaptive}>
          <Sidebar
              sortMenu={props.sortMenu}
              typeOfProductsMenu={props.typeOfProductsMenu}
              choosePrices={props.choosePrices}
              calorieValue={props.calorieValue}
              kilos={props.kilos}
              sidebarStaticContent={props.sidebarStaticContent}
              setSorting={props.setSorting}
              setCheckTypeOfProducts={props.setCheckTypeOfProducts}
              setCheckKilos={props.setCheckKilos}
              changeChoosePricesFrom={props.changeChoosePricesFrom}
              changeChoosePricesTo={props.changeChoosePricesTo}
              changeCalorieValueFrom={props.changeCalorieValueFrom}
              changeCalorieValueTo={props.changeCalorieValueTo}
              setStatusSidebar={setStatusSidebar}
          />
        </div>
        <Container>
          <div className={s.catalogue_breadCrumbs}>
            <NavLink to={"/"}>{props.staticContent.textLinkNav}</NavLink> / <span>{props.product.title}</span>
          </div>

          <div className={s.catalogue_infoProduct}>
            <div className={s.catalogue_countProduct}>
              <h3 className={s.catalogue_countProduct_title}>{props.product.title} </h3>
              <span
                  className={s.catalogue_countProduct_quantity}>{`${props.product.quantity} ${props.staticContent.textProducts}`}</span>
            </div>
            <div className={s.catalogue_menu_block}>
              <button onClick={() => {setStatusMenuSorting(!statusMenuSorting);}}
                  className={s.catalogue_sort}>
                {props.staticContent.textSortMenu}
                <span className={s.before}>
                  <img src={btn_sort} alt="arrow"/>
                </span>
                <span className={s.after}>
                  <img src={arrow_sort} alt="arrow"/>
                </span>
              </button>

              <div style={statusMenuSorting ? {display: "block"} : {display: "none"}}
                   className={s.catalogue_sort_menu}>
                <ul>
                  <li className={s.catalogue_sort_menu_item}>
                    <button onClick={() => {setStatusMenuSorting(!statusMenuSorting);}}
                        className={s.catalogue_sort_menu_btn}>{props.staticContent.textSortingPopular}</button>
                  </li>
                  <li className={s.catalogue_sort_menu_item}>
                    <button onClick={() => {setStatusMenuSorting(!statusMenuSorting);}}
                        className={s.catalogue_sort_menu_btn}>{props.staticContent.textSortingHigh}</button>
                  </li>
                  <li className={s.catalogue_sort_menu_item}>
                    <button onClick={() => {setStatusMenuSorting(!statusMenuSorting);}}
                        className={s.catalogue_sort_menu_btn}>{props.staticContent.textSortingLow}</button>
                  </li>
                  <li className={s.catalogue_sort_menu_item}>
                    <button onClick={() => {setStatusMenuSorting(!statusMenuSorting);}}
                        className={s.catalogue_sort_menu_btn}>{props.staticContent.textSortingNew}</button>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <div className={s.catalogue_menu}>
            <div className={s.catalogue_menu_block_adaptive}>
            <button onClick={() => {setStatusMenuSorting(!statusMenuSorting);}}
                className={s.catalogue_sort_adaptive}>
              {props.staticContent.textSortMenu}
              <span className={s.before}>
             <img src={btn_sort} alt="arrow"/>
           </span>
              <span className={s.after}>
             <img src={arrow_sort} alt="arrow"/>
           </span>
            </button>

              <div style={statusMenuSorting ? {display: "block"} : {display: "none"}}
                   className={s.catalogue_sort_menu}>
                <ul>
                  <li className={s.catalogue_sort_menu_item}>
                    <button onClick={() => {setStatusMenuSorting(!statusMenuSorting);}}
                            className={s.catalogue_sort_menu_btn}>{props.staticContent.textSortingPopular}</button>
                  </li>
                  <li className={s.catalogue_sort_menu_item}>
                    <button onClick={() => {setStatusMenuSorting(!statusMenuSorting);}}
                            className={s.catalogue_sort_menu_btn}>{props.staticContent.textSortingHigh}</button>
                  </li>
                  <li className={s.catalogue_sort_menu_item}>
                    <button onClick={() => {setStatusMenuSorting(!statusMenuSorting);}}
                            className={s.catalogue_sort_menu_btn}>{props.staticContent.textSortingLow}</button>
                  </li>
                  <li className={s.catalogue_sort_menu_item}>
                    <button onClick={() => {setStatusMenuSorting(!statusMenuSorting);}}
                            className={s.catalogue_sort_menu_btn}>{props.staticContent.textSortingNew}</button>
                  </li>
                </ul>
              </div>
            </div>

            <button onClick={() => {setStatusSidebar(!statusSidebar)}} className={s.catalogue_sort_adaptive}>
              {props.staticContent.textFilters}
              <span className={s.before}>
                <img src={btn_filters} alt="arrow"/>
              </span>
            </button>


          </div>

          <Row style={{marginTop: "30px"}}>
            <Col lg={3}>
              <div className={s.desktop_sidebar}>
                <Sidebar
                    sortMenu={props.sortMenu}
                    typeOfProductsMenu={props.typeOfProductsMenu}
                    choosePrices={props.choosePrices}
                    calorieValue={props.calorieValue}
                    kilos={props.kilos}
                    sidebarStaticContent={props.sidebarStaticContent}
                    setSorting={props.setSorting}
                    setCheckTypeOfProducts={props.setCheckTypeOfProducts}
                    setCheckKilos={props.setCheckKilos}
                    changeChoosePricesFrom={props.changeChoosePricesFrom}
                    changeChoosePricesTo={props.changeChoosePricesTo}
                    changeCalorieValueFrom={props.changeCalorieValueFrom}
                    changeCalorieValueTo={props.changeCalorieValueTo}
                    setStatusSidebar={setStatusSidebar}
                />
              </div>

            </Col>
            <Col lg={9}>
              <div className={s.catalogue_cards}>
                {props.products.products.map((el, id) => {
                  return <CardTypeTwo
                      key={id}
                      productId={id}
                      maxWidth={"auto"}
                      marginLeft={0}
                      product={el}
                      toggleLike={props.toggleLike}
                      staticContent={props.products.staticContent}
                      changeWeight={props.changeWeight}
                  />
                })}
              </div>

            </Col>
          </Row>

        </Container>
        <img src={section_image_1} alt="section_image" className={s.section_img_left}/>
        <img src={section_image_2} alt="section_image" className={s.section_img_right}/>
      </div>
  );
}

export default Catalogue;