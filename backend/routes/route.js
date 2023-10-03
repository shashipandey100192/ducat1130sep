const express = require('express');
const rout = express.Router();
const myschima = require('../schimas/schimaformat');


rout.get("/",(req,res)=>{
    res.send("welcome to express js");
});

rout.get("/about",(req,res)=>{
    res.send("about file ");
});

rout.get("/alldata",async(req,res)=>{
    const mydata = await myschima.find();
    res.json(mydata);
    console.log(mydata);
});



// post / create  api
rout.post("/create",async(req,res)=>{
    const {fullname,email,phone,city,gender,pass,mypic} = req.body;
    const adduser = new myschima({
        fullname,email,phone,city,gender,pass,mypic
    });
    await adduser.save();
    res.status(200).json(adduser);
    console.log(adduser);
});







module.exports = rout

