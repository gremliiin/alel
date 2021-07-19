import React from "react";
import image from "../../common/images/preloader.gif";

const Preloader = () => {
  return(<div style={{width: "100%", height: "100%", position: "absolute"}} >
    <img style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} src={image} alt="preloader"/>
  </div>);
};

export default Preloader;