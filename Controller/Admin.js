const mongoose = require("mongoose");
const Admin = require("../Modules/Admin.js");

const admincreate = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.create({ email, password });
    res.status(200).json(admin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



const adminget = async (req, res) => {
  try {
    const admin = await Admin.find({}, { password: 0 });
    res.status(200).json(admin);
  } catch (error) {
    res.status(400).json({ error: { ...error } });
  }
};




const adminupdate = async (req, res) => {
    const { id } = req.params;
    const { email, password } = req.body;
    try {
      const admin = await Admin.findByIdAndUpdate(
        id,
        { email, password },
        { new: true }
      );
      res.status(200).json(admin);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


  

  const admindelete = async (req, res) => {
    const { id } = req.params;
    try {
       await Admin.findByIdAndDelete(
        id
      );
      res.status(200).json({message:"admin deleted succefully"});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  

  const loginAdmin = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const admin = await Admin.findOne({ username });
  
      if (!admin) {
        return res.status(404).json({ error: "Admin not found" });
      }
  
      if (password === admin.password) {
        res.status(200).json({ status: "ok", data: admin });
      } else {
        res.status(401).json({ error: "Incorrect password" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to retrieve the admin" });
    }
  };



  module.exports = {
    admincreate,
    adminget,
    adminupdate,
    admindelete,
    loginAdmin
  };
  