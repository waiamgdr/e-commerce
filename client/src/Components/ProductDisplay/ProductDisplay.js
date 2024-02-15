import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";

import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/shopContext";
import { useSelector } from "react-redux";


const ProductDisplay = (props) => {
  const{ addToCart}=useContext(ShopContext)
  // const  {product}=useSelector(state=>state.product)
  
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={props.product.image} />
          <img src={props.product.image} />
          <img src={props.product.image} />
          <img src={props.product.image} />
        </div>
        <div className="productdisplay-img">
          <img className="main_img" src={props.product.image} />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1> {props.product.name}</h1>

        <div className="productdisplay-right-star">
          <img src={star_icon} />
          <img src={star_icon} />
          <img src={star_icon} />
          <img src={star_icon} />
          <img src={star_dull_icon} />
          <p>(122)</p>
        </div>
        <div className="price">
          <div className="price-old">{props.product.old_price}</div>
          <div className="price-new">{props.product.new_price}</div>
          <div className=" product-discription">Un vêtement est un article d'habillement servant à couvrir une partie du corps humain. Il est le plus souvent en tissu. Les vêtements portés, et les raisons ...  </div>
          <div className="size">
            <h1> Select Size</h1>
            <div className="sizes">
              <div>S</div>
              <div>M</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button  onClick={()=>{addToCart(props.product._id)}}>ADD TO CART </button>
         
      
  
          <p className="category">
            <span>Category : </span> {props.product.category}, Tshirt ,Crop TOP
          </p>
          <p className="category">
            <span>tags : </span> Modern , Latest ,Crop TOP
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default ProductDisplay;
