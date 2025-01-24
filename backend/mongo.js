const mongoose = require("mongoose");
require("dotenv").config();


const mongodb = async()=>{
try {
    await mongoose.connect( process.env.MONGO_URL);
    console.log("mongodb connected");
} catch (error) {
    console.log("mongodb not connected")
}
}

module.exports=mongodb