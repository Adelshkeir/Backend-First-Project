const mongoose = require("mongoose");
const Groceries = require ('./GroceriesStorModules')
const categoriesschema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  storeID:{
     type: mongoose.Schema.Types.ObjectId, ref: 'Groceries' ,
  }
},
{timestamps:true});

const Category = mongoose.model('Category', categoriesschema);
module.exports= Category;

