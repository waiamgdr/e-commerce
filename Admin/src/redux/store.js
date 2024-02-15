import { configureStore } from "@reduxjs/toolkit";
import product_slice from './slices/sliceaddproduct'
export default configureStore({ reducer:{product:product_slice}})