const mongoose = require("mongoose");



const userSchems = new mongoose.Schema({
    name:{type:String , require:true},
    email:{type:String , require:true},
    number:{type:Number , require:true},
    message:{type:String , require:true},
})

module.exports=mongoose.model("user",userSchems);