import React from "react";
import s from "./commonStyles.module.css";
import {NavLink} from "react-router-dom";

const BreadCrumbs = (props) => {
  return (
    <div className={s.breadCrumbs}>
      {props.links.map((el, id) => {
        return <span key={id}><NavLink to={el.path}>{el.text}</NavLink> / </span>;
      })}  <span>{props.title}</span>
    </div>
  );
}

export default BreadCrumbs;