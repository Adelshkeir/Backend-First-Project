const mongoose = require ('mongoose');
const Offers = require ('../Modules/Offersmodules')


const offerscreate = async (req, res) => {
    const { productID,description } = req.body;
    try {
      
      const offer = await Offers.create({productID,description });
      res.status(200).json(offer);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  


  const offersget = async (req, res) => {
    try {
      const offer = await Offers.find();
      res.status(200).json(offer);
    } catch (error) {
      res.status(400).json({ error: { ...error } });
    }
  };



  const offersgetone = async (req, res) => {
    const {id}=req.params;
    try {
      const offer = await Offers.findById({id});
      res.status(200).json(offer);
    } catch (error) {
      res.status(400).json({ error: { ...error } });
    }
  };





  const offersupdate = async (req, res) => {
    const { id } = req.params;
    const {productID,description } = req.body;
    try {
      const offer = await Offers.findByIdAndUpdate(
        id,
        {productID ,description },
        { new: true }
      );
      res.status(200).json(offer);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };




  const offersdelete = async (req, res) => {
    const { id } = req.params;
    try {
       await Offers.findByIdAndDelete(
        id
      );
      res.status(200).json({message:"offers deleted succefully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = {
    offerscreate,
    offersget,
    offersgetone,
    offersupdate,
    offersdelete
  };
  