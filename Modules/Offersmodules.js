const mongoose = require("mongoose");

const Offersschema = new mongoose.Schema(
  {
    offersID: {
      type: String,
      required: true,
    },
    productID: {
      type: String,
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
