const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const adminrouter = require("./routes/Admin");
const offersrouter = require("./routes/Offersroutes");
const categoryrouter = require("./routes/categoriesroutes");
const Groceryrouter = require("./routes/GroceriesStoreRoutes");
const Productsrouter = require("./routes/productroutes");
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use([
  adminrouter,
  offersrouter,
  categoryrouter,
  Groceryrouter,
  Productsrouter,
]);

// app.use(express.static("upload"));

app.use("/upload", express.static("upload"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(":))))))))))", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
