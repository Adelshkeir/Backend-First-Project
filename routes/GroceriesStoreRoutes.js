const express =require('express')
const router = express.Router()
const {groceriescreate,groceriesget, groceriesupdate, groceriesdelete}=require ('../Controller/GroceriesStorController')






router.post('/groceries',groceriescreate)
router.get('/groceries',groceriesget)
router.put('/groceries/:id',groceriesupdate)
router.delete('/groceries/:id',groceriesdelete)






module.exports = router