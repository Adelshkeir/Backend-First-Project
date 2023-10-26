const express = require("express");
const app = express();
require("dotenv").config();
const adminroutes = require("./routes/Admin");
const offersroutes = require("./routes/Offersroutes");
const categoryrouter = require("./routes/categoriesroutes");
const mongoose = require("mongoose");

app.use(express.json()).use([adminroutes, offersroutes, categoryrouter]);
// .use(offersroutes).use(categoryrouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(":))))))))))", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("error");
  });
