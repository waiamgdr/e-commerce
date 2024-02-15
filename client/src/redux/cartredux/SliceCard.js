import { createSlice } from "@reduxjs/toolkit";










const cartslice=createSlice({
    name:"cart ",
    initialState:{
    
  productcartArray:[], 
    id:"",
    total:0 }, 

   
       
        reducers:{
            addToCart:(state,action )=>{
              state.productcartArray.map((el)=>action.payload)
            }
          },
       



        
      
    

        
    

});
    export default cartslice.reducer;
    export const {addToCart}=cartslice.actions
    