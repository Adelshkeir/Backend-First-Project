const express = require("express");
const Productsrouter = express.Router();
const {
  productcreate,
  productget,
  productgetone,
  productupdate,
  productdelete,
} = require("../Controller/productscontroller");
const upload = require("../configuration/Multer");

Productsrouter.post("/product", upload.single("image"), productcreate);
Productsrouter.get("/product", productget);
Productsrouter.get("/product/:id", productgetone);
Productsrouter.patch("/product/:id", productupdate);
Productsrouter.delete("/product/:id", productdelete);

module.exports = Productsrouter;
