import React from "react";
import "./Offers.css";
import exclucive_imge from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className="Offers">
      <div className="Offers-left">
        <h1> Exclusive</h1>
        <h1> Offers For You</h1>
        <p> ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now </button>
      </div>
      <div className="Offers-right">
        <img src={exclucive_imge} alt=""/>
      </div>
    </div>
  );
};

export default Offers;
