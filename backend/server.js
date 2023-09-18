const express = require('express');
require('dotenv').config();
const port  = process.env.port || 4500;

const app = express();

app.get("/",(req,res)=>{
    res.send("welcome to express js");
})

app.get("/about",(req,res)=>{
    res.send("about file ");
})



// app.use(json());


app.listen(port,()=>{
    console.log(`server is running: ${port}`);
})
