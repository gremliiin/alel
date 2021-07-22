import React from "react";
import s from "./AboutCompany.module.css";

const AboutCompanyContent = (props) => {
  return (
    <div className={s.aboutCompany_section_content}>
      {
        props.image ? <img src={props.image} alt="image"/> :
        <div>
          <h2 className={s.aboutCompany_section_content_title}>{props.title}</h2>
      {
          props.items.map((el, id) => {
          return <p key={id} className={s.aboutCompany_section_content_text}>{el}</p>
      })
      }
        </div>
      }

    </div>
  );
}

export default AboutCompanyContent;