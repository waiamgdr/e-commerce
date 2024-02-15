import React , { useEffect } from 'react'
import'./Popular.css'

import Item from '../Item/Item'
import { useDispatch , useSelector} from 'react-redux'
import { getallproduct } from "../../redux/Productslice";
const Popular = () => {

  const dispatch=useDispatch();
  const  {product}=useSelector(state=>state.product)
  
  useEffect(()=>{
    dispatch(getallproduct())
   
   
  },[])
  return (
    <div className='popular'>
        <h1> Popular IN WOMEN </h1>
        <hr/>
        <div className='popular_item'  >
         
            { Array.isArray(product) && product.map((item,i)=><>
            <h1> {item.name}</h1>
            </>
                
            )}
        </div>

    </div>
  )
}

export default Popular