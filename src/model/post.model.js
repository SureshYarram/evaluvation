const mongoose = require("mongoose");



const postSchema = new mongoose.Schema({
    body :{type:String , required:true},
    likes:{type:Number, required:true , default:0},
   image:{type:String ,required :false },
   userId :{type:mongoose.Schema.Types.ObjectId , ref:"user" , required:true}
   
},{
    timestamps:true
})

module.exports = mongoose.model("post",postSchema);