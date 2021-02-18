const mongoose = require('mongoose');
const validator = require("validator")

const createAccount = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true , "Email Id already Exisit"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    }  
})

const Register = new mongoose.model("candidate" , createAccount); //clgReg
module.exports = Register;