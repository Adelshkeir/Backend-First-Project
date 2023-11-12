const mongooose = require("mongoose");
const Product = require("../Modules/productsmodules");

const productcreate = async (req, res) => {
  const { productName, price, image, categoryID, storeID, newprice, itsnew } =
    req.body;
  try {
    const product = await Product.create({
      productName,
      price,
      image: `${req.protocol}://${req.get("host")}/${req.file.path}`,
      categoryID,
      storeID,
      newprice,
      itsnew,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ ...error });
  }
};

const productget = async (req, res) => {
  try {
    const productData = await Product.aggregate([
      {
        $lookup: {
          from: "groceries",
          localField: "storeID",
          foreignField: "_id",
          as: "storeData",
        },
      },
      { $unwind: "$storeData" },
      {
        $lookup: {
          from: "categories",
          localField: "categoryID",
          foreignField: "_id",
          as: "categoryData",
        },
      },
      { $unwind: "$categoryData" },
      {
        $project: {
          productName: 1,
          price: 1,
          image: 1,
          storeData: {
            StoreName: 1,
            OwnerName: 1,
            PhoneNumber: 1,
            Location: 1,
            City: 1,
            Area: 1,
            StoreImage: 1,
          },
          categoryData: {
            categoryName: 1,
            _id: 1,
            // Include other fields from the categories collection as needed
          },
          newprice: 1,
          itsnew: 1,
        },
      },
    ]);

    res.status(200).json(productData);
  } catch (error) {
    res.status(400).json({ error: { ...error } });
  }
};

const productgetone = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: { ...error } });
  }
};

const productupdate = async (req, res) => {
  const { id } = req.params;
  const { productName, price, image, categoryID, storeID, newprice, itsnew } =
    req.body;
  try {
    const product = await Product.findByIdAndUpdate(
      id,
      {
        productName,
        price,
        // image:req.file.path? `${req.protocol}://${req.get("host")}/${req.file.path}`,
        categoryID,
        storeID,
        newprice,
        itsnew,
      },
      { new: true }
    );
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const productdelete = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "product deleted succefully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  productcreate,
  productget,
  productgetone,
  productupdate,
  productdelete,
};
