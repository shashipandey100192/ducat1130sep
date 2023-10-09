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


/*single data api*/
rout.get("/singledata/:id",async(req,res)=>{
    const {id} = req.params;
    const mydata = await myschima.findById({_id:id});
    res.json(mydata);
    console.log(mydata);
});


// delete api
rout.delete("/deleterecord/:id",async(req,res)=>{
    const {id} = req.params;
    const a = await myschima.findByIdAndDelete({_id:id})
    console.log(a);
    res.status(201).json(a);
});







module.exports = rout

