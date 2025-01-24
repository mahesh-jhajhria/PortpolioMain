const express = require("express");
require("dotenv").config();
const mongodb = require("./mongo");
const User = require("./usersc");
const cors = require("cors");
const path = require('path');

const app=express();

const _dirname = path.resolve();

const port = process.env.PORT || 3000
app.use(express.json());
app.use(cors());


app.post("/message" ,async(req,res)=>{
    if(req.body.name && req.body.email && req.body.number && req.body.message){
   let users = new User(req.body);
   await users.save();

   return res.status(200).send({
    message:"your message successfully send",
    status:true,
    users
   })

    }else{
        return res.status(500).send({
            message:"something is missing",
            status:false,
           
           })
    }
  
})


app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get('*', (_, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
})


app.listen(port,()=>{
    mongodb();
    console.log(`running port ${port}`);
})