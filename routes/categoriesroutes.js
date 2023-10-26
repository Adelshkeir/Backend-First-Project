const express = require('express')
const categoryrouter = express.Router()
const { categorycreate, categoryget, categoryupdate, categorydelete, categorygetone } = require('../Controller/categoriescontroller');





categoryrouter.post('/category',categorycreate)
categoryrouter.get('/category',categoryget)
categoryrouter.get('/category/:id',categorygetone)
categoryrouter.patch('/category/:id',categoryupdate)
categoryrouter.delete('/offers/:id',categorydelete)





module.exports = categoryrouter