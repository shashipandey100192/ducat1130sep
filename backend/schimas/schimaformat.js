const mongoose = require('mongoose');

const mydatapattern = new mongoose.Schema({
    fullname:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    gender:{
        type:String
    },
    city:{
        type:String
    },
    pass:{
        type:String
    },
    mypic:{
        type:String
    }
})

const mypattern = new mongoose.model("ducatpro",mydatapattern);
module.exports = mypattern;


