const mongoose = require("mongoose");
const  Category = require ('./categoriesmodules')
const Groceries = require ('./GroceriesStorModules')


const productsSchema = new mongoose.Schema({
  productName: { type: String },
  price: { type: Number },
  image: { type: String },
  categoryID: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  storeID:{ type: mongoose.Schema.Types.ObjectId, ref: 'Groceries' },
  newprice: { type: Number },
  itsnew: { type: Boolean, default: false },
});


const Products = mongoose.model("product", productsSchema);

module.exports = Products;
