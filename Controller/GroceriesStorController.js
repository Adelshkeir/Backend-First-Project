const mongoose =require("mongoose")
const Groceries =require("../Modules/GroceriesStorModules");





const groceriescreate = async (req, res) => {
    const { StoreID, StoreName, OwnerName, PhoneNumber, Location, City, Area ,StoreImage } = req.body;
    try {
      const groceries = await Groceries.create({ StoreID, StoreName, OwnerName, PhoneNumber, Location, City, Area, StoreImage });
      res.status(200).json(groceries);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


    const groceriesget = async (req, res) => {
        try {
          const groceriesget = await Groceries.find({},{ StoreID, StoreName, OwnerName, PhoneNumber, Location, City, Area ,StoreImage } );
          res.status(200).json(groceries);
        } catch (error) {
          res.status(400).json({ error: { ...error } });
        }
      };

const groceriesupdate = async (req, res) => {
    const { StoreID} = req.params;
    const {  StoreName, OwnerName, PhoneNumber, Location, City, Area, StoreImage  } = req.body;
    try {
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
    groceriesupdate, 
    groceriesdelete

  }


    
      

      