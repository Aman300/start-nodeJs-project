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
    age:{
        type: Number,
        required: true,
    },
    hobby:{
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
        unique:true
    },
    isDeleted:{
        type:Boolean, 
        default: false
    }

},{timestamps:true})

module.exports = mongoose.model("Student", authorSchema)