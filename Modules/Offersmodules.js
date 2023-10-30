const mongoose = require("mongoose");
const Products = require ('./productsmodules')
const Offersschema = new mongoose.Schema(
  {
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Products',
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Offers = mongoose.model("Offer", Offersschema);
module.exports = Offers;
