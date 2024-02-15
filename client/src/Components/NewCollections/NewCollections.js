import React from 'react'
import './NewCollections.css'

import Item from '../Item/Item'
import { useSelector } from 'react-redux'
const NewCollections = () => {
  const  {product}=useSelector(state=>state.product)
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS </h1>
        <hr/>
        <div className='collection'>
            {Array.isArray(product) && product.map((el,i)=>{
                return (<Item  key ={i} id={el._id} name={el.name} image={el.image }
                    new_price={el.new_price} old_price={el.old_price}/>)
                })}
           
        </div>
         </div>
  )
}

export default NewCollections