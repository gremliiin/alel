import React from "react";
import s from "./Catalogue.module.css";
import {NavLink} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import btn_sort from "../../common/images/sort_btn.svg";
import arrow_sort from "../../common/images/arrow_sort.svg";
import Card from "../CommonComponents/Card";
import CardTypeOne from "../CommonComponents/CardTypeOne";
import CardTypeTwo from "../CommonComponents/CardTypeTwo";
import {toggleLikeAC} from "../../redux/CatalogueReducer";



const Catalogue = (props) => {
  return (
   <div className={s.catalogue}>
     <Container>
       <div className={s.catalogue_breadCrumbs}>
         <NavLink to={"/"}>{props.staticContent.textLinkNav}</NavLink> / <span>{props.product.title}</span>
       </div>

       <div className={s.catalogue_infoProduct}>
         <div className={s.catalogue_countProduct}>
           <h3 className={s.catalogue_countProduct_title}>{props.product.title} </h3>
           <span className={s.catalogue_countProduct_quantity}>{`${props.product.quantity} ${props.staticContent.textProducts}`}</span>
         </div>

         <button className={s.catalogue_sort}>
           {props.staticContent.textSortMenu}
           <span className={s.before}>
             <img src={btn_sort} alt="arrow"/>
           </span>
           <span className={s.after}>
             <img src={arrow_sort} alt="arrow"/>
           </span>
         </button>
       </div>

       <Row style={{marginTop: "30px"}}>
         <Col lg={3}>

         </Col>
         <Col lg={9}>
           <div className={s.catalogue_cards}>
             {props.products.map((el, id) => {
               return <CardTypeTwo
                   key={id}
                   id={id}
                   marginLeft = {0}
                   product = {el}
                   toggleLike = {props.toggleLike}
                   staticContent = {props.staticContent}
               />
             })}
           </div>

         </Col>
       </Row>

     </Container>
   </div>
  );
}

export default Catalogue;