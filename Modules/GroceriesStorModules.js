const mongoose = require("mongoose");
const { Schema } = mongoose;

const groceriesSchema = new mongoose.Schema({
  StoreName: { type: String, unique: true },
  OwnerName: { type: String },
  PhoneNumber: { type: Number },
  Location: { type: String },
  City: { type: String },
  Area: { type: String },
  StoreImage: { type: String },
  categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
});

const Groceries = mongoose.model("Grocery", groceriesSchema);

module.exports = Groceries;
