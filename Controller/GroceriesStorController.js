const mongoose = require("mongoose");
const Groceries = require("../Modules/GroceriesStorModules");

const groceriescreate = async (req, res) => {
  const { StoreName, OwnerName, PhoneNumber, Location, City, Area } = req.body;
  try {
    const groceries = await Groceries.create({
      StoreName,
      OwnerName,
      PhoneNumber,
      Location,
      City,
      Area,
      StoreImage: `${req.protocol}://${req.get("host")}/${req.file.path}`,
    });
    res.status(200).json(groceries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const groceriesget = async (req, res) => {
  try {
    const groceries = await Groceries.find();

    res.status(200).json(groceries);
  } catch (error) {
    res.status(400).json({ error: { ...error } });
  }
};

const grocerygetone = async (req, res) => {
  const { storeName } = req.params;
  try {
    const storeData = await Groceries.aggregate([
      { $match: { StoreName: storeName } },
      {
        $lookup: {
          from: "categories",
          localField: "_id",
          foreignField: "storeID", // Update this field to match the actual field in the Category model
          as: "categories",
        },
      },
      {
        $unwind: {
          path: "$categories",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: "products",
          localField: "categories._id",
          foreignField: "categoryID",
          as: "categories.products",
        },
      },
      {
        $group: {
          _id: "$_id",
          categories: { $push: "$categories" },
          storeData: { $first: "$$ROOT" },
        },
      },
      {
        $replaceRoot: { newRoot: "$storeData" },
      },
      {
        $project: {
          __v: 0,
        },
      },
    ]);

    res.status(200).json(storeData[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



const groceriesupdate = async (req, res) => {
  const { id } = req.params;
  const { StoreName, OwnerName, PhoneNumber, Location, City, Area } = req.body;
  try {
    const groceries = await Groceries.findByIdAndUpdate(
      id,
      {
        StoreName,
        OwnerName,
        PhoneNumber,
        Location,
        City,
        Area,
        StoreImage: `${req.protocol}://${req.get("host")}/${req.file.path}`,
      },
      { new: true }
    );
    res.status(200).json(groceries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const groceriesdelete = async (req, res) => {
  const { id } = req.params;
  try {
    await Groceries.findByIdAndDelete(id);
    res.status(200).json({ message: "Groceries deleted succefully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  groceriescreate,
  groceriesget,
  grocerygetone,
  groceriesupdate,
  groceriesdelete,
};