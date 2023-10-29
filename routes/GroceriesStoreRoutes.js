const express =require('express')
const Groceryrouter = express.Router()
const {groceriescreate,groceriesget, groceriesupdate, groceriesdelete,grocerygetone}=require ('../Controller/GroceriesStorController')






Groceryrouter.post('/groceries',groceriescreate)
Groceryrouter.get('/groceries',groceriesget)
Groceryrouter.get('/groceries/:id',grocerygetone)
Groceryrouter.patch('/groceries/:id',groceriesupdate)
Groceryrouter.delete('/groceries/:id',groceriesdelete)






module.exports = Groceryrouter