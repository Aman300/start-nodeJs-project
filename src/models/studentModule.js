const mongoose = require('mongoose');
const authorSchema = new mongoose.Schema({

    first_Name:{
        type: String,
        required: true,
    },
    last_Name:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    mobile_Number:{
        type: Number,
        required: true,
        unique: false,
    },
    isDeleted:{
        type:Boolean, 
        default: false
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
        unique: false,
    }

},{timestamps:true})

module.exports = mongoose.model("Student", authorSchema)