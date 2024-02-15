import React, {useEffect} from "react";
import { useParams } from "react-router-dom";

import Breadcrum from "../Components/Breackrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

import DiscriptionBox from "../Components/DiscriptionBox/DiscriptionBox";
import RelatedProduct from "../Components/RelatedProduct/RelatedProduct";
import { useDispatch , useSelector} from 'react-redux'
import { getallproduct } from "../redux/Productslice";

const Product = () => {

  const dispatch=useDispatch();
  // const  {product}=useSelector(state=>state.product)

  useEffect(()=>{
    dispatch(getallproduct()) 
  },[])
  const  {product}=useSelector(state=>state.product)
 const  all_product=product;
  const params = useParams();
  
  const products=(Array.isArray(all_product) &&  all_product.find((el) =>( el._id == params.id)))

  return (
    <div>
     
     
      <Breadcrum product={products} /> 
     
     <ProductDisplay product={products} />
     <DiscriptionBox/>
     <RelatedProduct/>
    </div>
  );
};

export default Product;
