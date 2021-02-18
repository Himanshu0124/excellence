const mongoose = require('mongoose');
const validator = require("validator")

const assignScore = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        minlength:3
    },
    round1:{
        type:Number,
        required:true,
        minlength:2
    },
    round2:{
        type:Number,
        required:true,
        minlength:2
    },
    round3:{
        type:Number,
        required:true,
        minlength:2
    }
})

const Registerscore = new mongoose.model("testscore" , assignScore);  
module.exports = Registerscore;