const mongoose =require("mongoose")
const Groceries =require("../Modules/GroceriesStorModules");





const groceriescreate = async (req, res) => {
    const { StoreID, StoreName, OwnerName, PhoneNumber, Location, City, Area ,StoreImage } = req.body;
    try {
      const StoreImage = req.file.map(file => file.filename)
      const groceries = await Groceries.create({ StoreID, StoreName, OwnerName, PhoneNumber, Location, City, Area, StoreImage });
      res.status(200).json(groceries);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };




    const groceriesget = async (req, res) => {
        try {
          const groceries= await Groceries.find();
          res.status(200).json(groceries);
        } catch (error) {
          res.status(400).json({ error: { ...error } });
        }
      };



      const grocerygetone = async (req, res) => {
        const { id } = req.params;
        try {
          const category = await Groceries.findById({ id });
          res.status(200).json(category);
        } catch (error) {
          res.status(400).json({ error: { ...error } });
        }
      };
      








const groceriesupdate = async (req, res) => {
    const { id} = req.params;
    const {  StoreID, StoreName, OwnerName, PhoneNumber, Location, City, Area, StoreImage  } = req.body;
    try {
      const image = req.file.map(file => file.filename)
      const groceries = await Groceries.findByIdAndUpdate(
        id,
        { StoreID, StoreName, OwnerName, PhoneNumber, Location, City, Area ,StoreImage},
        { new: true }
      );
      res.status(200).json(groceries);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };





  const groceriesdelete = async (req, res) => {
    const { StoreID} = req.params;
    try {
       await Groceries.findByIdAndDelete(
        StoreID
      );
      res.status(200).json({message:"Groceries deleted succefully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };




  module.exports={
    groceriescreate,
    groceriesget, 
    grocerygetone,
    groceriesupdate, 
    groceriesdelete

  }


    
      

      