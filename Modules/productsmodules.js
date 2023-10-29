const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  //   productID: { type: String, require: true, unique: true },
  productName: { type: String },
  price: { type: Number },
  image: { type: String },
  categoryID: { type: String },
  storeID: { type: String },
  newprice: { type: Number },
  itsnew: { type: Boolean, default: false },
});

const Products = mongoose.model("product", productsSchema);

module.exports = Products;
