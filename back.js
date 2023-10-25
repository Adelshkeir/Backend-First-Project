const express = require ('express')
const app = express()
require('dotenv').config()
const backroutes = require('./routes/Admin')
const mongoose = require('mongoose');







app.use(express.json())
app.use(backroutes)
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(":))))))))))",process.env.PORT)
        })
        
})
.catch((error)=>{
console.log("error")
})



