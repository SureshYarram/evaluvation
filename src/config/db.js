const mongoose = require("mongoose");

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://Suresh:suresh_123@cluster0.xfoxl.mongodb.net/Facebook?retryWrites=true&w=majority")
};
