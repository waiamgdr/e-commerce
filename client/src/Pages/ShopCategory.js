import React from "react";
import "./Css/ShopCategory.css";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

import { ShopContext } from "../Context/shopContext";
import { useContext } from "react";
const ShopCategory = (props) => {
  const{all_product}=useContext(ShopContext)
  console.log( all_product)
  return (
    <div className="shop-category">
      <img className="shopcategorybanner" src={props.banner}></img>
      <div className="shopcategory-indexShort">
        <p>
          <span> Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-short">
          sort by
          <img src={dropdown_icon}></img>
        </div>
      </div>
      
      <div className="shopcategory-products">
        
        {Array.isArray(all_product) && all_product.map((el, i) => {
          
          if (props.category === el.category) {
            return (
              <Item
                key={i}
                id={el._id}
                name={el.name}
                image={el.image}
                new_price={el.new_price}
                old_price={el.old_price}
              />
            );
          } else {
            return <h1>rien product  {console.log(el.category)}</h1>;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More 
      </div>
      </div>
   
  );
};

export default ShopCategory;
