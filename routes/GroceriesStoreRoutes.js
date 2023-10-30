const express =require('express')
const Groceryrouter = express.Router()
const {groceriescreate,groceriesget, groceriesupdate, groceriesdelete,grocerygetone}=require ('../Controller/GroceriesStorController')
const upload = require("../configuration/Multer");





Groceryrouter.post('/groceries',upload.single("image"),groceriescreate)
Groceryrouter.get('/groceries',groceriesget)
Groceryrouter.get('/groceries/:id',grocerygetone)
Groceryrouter.patch('/groceries/:id',upload.single("image"),groceriesupdate)
Groceryrouter.delete('/groceries/:id',groceriesdelete)






module.exports = Groceryrouter