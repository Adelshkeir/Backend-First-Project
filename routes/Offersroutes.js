const express = require('express')
const offersrouter = express.Router()
const { offerscreate, offersget,offersgetone, offersupdate, offersdelete } = require('../Controller/Offerscontroller');






offersrouter.post('/offers',offerscreate)
offersrouter.get('/offers',offersget)
offersrouter.get('/offers/:id',offersgetone)
offersrouter.patch('/offers/:id',offersupdate)
offersrouter.delete('/offers/:id',offersdelete)






module.exports = offersrouter