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



module.exports = rout

