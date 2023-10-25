const express = require('express')
const router = express.Router()
const { admincreate, adminget, adminupdate, admindelete } = require('../Controller/Admin.js');






router.post('/admin',admincreate)
router.get('/admin',adminget)
router.put('/admin/:id',adminupdate)
router.delete('/admin/:id',admindelete)






module.exports = router