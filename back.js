const express = require ('express')
const app = express()
require('dotenv').config()
const backroutes = require('/home/adel/Desktop/Backend-First-Project/routes/Admin.js')
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



