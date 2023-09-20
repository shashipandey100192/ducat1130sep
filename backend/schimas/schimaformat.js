const mongoose = require('mongoose');

const mydatapattern = new mongoose.Schema({
    name:{
        type:String
    }
})

const mypattern = new mongoose.model("ducatpro",mydatapattern);
module.exports = mypattern;
