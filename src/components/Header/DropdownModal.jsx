import React from "react";
import s from "./Header.module.css";

let DropdownModal = ({indexZ, cancelDropDowns, isBackgroundModal, color, opacity}) => {
  return(
      <div className={s.dropdown_modal} style={isBackgroundModal ?
          {display: "block", zIndex: `${indexZ}`, backgroundColor: `${color}`, opacity: `${opacity}`} :
          {display: "none"}
      } onClick={cancelDropDowns}>DropdownModalActive</div>
  );
}

export default DropdownModal;
