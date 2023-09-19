const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./db/connection');

const port  = process.env.port || 4500;

const app = express();

app.get("/",(req,res)=>{
    res.send("welcome to express js");
})

app.get("/about",(req,res)=>{
    res.send("about file ");
})



// app.use(json());
// app.use(cors);


app.listen(port,()=>{
    console.log(`server is running: ${port}`);
})
