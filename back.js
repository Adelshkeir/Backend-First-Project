const express = require("express");
const app = express();
require("dotenv").config();
const adminrouter = require("./routes/Admin");
const offersrouter = require("./routes/Offersroutes");
const categoryrouter = require("./routes/categoriesroutes");
const Groceryrouter = require("./routes/GroceriesStoreRoutes");
const Productsrouter = require("./routes/productroutes");
const mongoose = require("mongoose");
// const upload = require("./configuration/Multer");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.urlencoded());

// app.use(upload.array());

app.use([
  adminrouter,
  offersrouter,
  categoryrouter,
  Groceryrouter,
  Productsrouter,
]);
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
