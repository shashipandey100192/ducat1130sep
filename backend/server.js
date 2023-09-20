const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
require('./db/connection');
const rout = require('./routes/route');

const port  = process.env.port || 4500;





app.use(express.json());
app.use(cors());
app.use(rout);


app.listen(port,()=>{
    console.log(`server is running: ${port}`);
})
