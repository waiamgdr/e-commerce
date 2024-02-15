
import { configureStore } from "@reduxjs/toolkit";
import cartslice from './cartredux/SliceCard'
import Userslice from "./Userslice";
import product_slice from "./Productslice"

export default configureStore({ reducer:{cart:cartslice,user:Userslice , product:product_slice}})