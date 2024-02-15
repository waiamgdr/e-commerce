const mongoose = require('mongoose');


const OrderSchema = new mongoose.Schema(
  {
    owner:{
      type:mongoose.Schema.Types.ObjectId,
      ref :'user',
      require:true
  },
  cart:{ type:Array,require:true}
  
     }
);

module.exports = mongoose.model('Order', OrderSchema);