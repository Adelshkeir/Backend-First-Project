const mongoose = require("mongoose");

const categoriesschema = new mongoose.Schema({
  categoryID: {
    type: String,
    required: true,
  },
  categoryName: {
    type: String,
    required: true,
  },
  storyID:{
    type : String,
    required:true
  }
},
{timestamps:true});

const Category = mongoose.model('Category', categoriesschema);
module.exports= Category;

