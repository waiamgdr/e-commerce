import React, { createContext, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';




export const ShopContext = createContext(null);



const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState({})
    console.log("cart",cartItem)
    const  {product}=useSelector(state=>state.product)
    const all_product=product;
    useEffect(()=>{
        const getDefaulCart = () => {
    
            let cart = {};
            for (let index = 0; index < product.length ; index++) {
                cart[product[index]._id]=0  
                console.log(index)
            } 
            setCartItem(cart)
            ;

        
        }
        getDefaulCart();
        console.log(cartItem)
    },[product])
    
   

   

    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
   

    const removefromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))

    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItem[item]
            }
        } return totalAmount;
    }
    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                totalItem += cartItem[item]

            }
        }return totalItem;
    }
    const contextValue = {all_product, cartItem, addToCart, removefromCart, getTotalCartAmount ,getTotalCartItems };

    return (
        <ShopContext.Provider value={contextValue}>
            
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;