const express = require('express')
const adminrouter = express.Router()
const { admincreate, adminget, adminupdate, admindelete,loginAdmin } = require('../Controller/Admin.js');





adminrouter.post('/adminlogin',loginAdmin)
adminrouter.post('/admin',admincreate)
adminrouter.get('/admin',adminget)
adminrouter.put('/admin/:id',adminupdate)
adminrouter.delete('/admin/:id',admindelete)






module.exports = adminrouter