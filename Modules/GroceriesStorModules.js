const mongoose =require('mongoose')


const groceriesSchema=new mongooseSchema({
StoreID:{type:Number, require:true, unique: true},
StoreName:String,
OwnerName:String,
PhoneNumber:Number,
Location:String,
City:String,
Area:String, 
StoreImage:String,

})


const Groceries= mongoose.model('Groceries',groceriesSchema)


module.exports =Groceries;