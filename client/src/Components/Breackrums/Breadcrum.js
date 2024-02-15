import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";
const Breadcrum = (props) => {
  
  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} /> shop
      <img src={arrow_icon} /> {props.product.category}
      <img src={arrow_icon} /> {props.product.name}
    </div>
  );
};

export default Breadcrum;
