const mongoose = require("mongoose");


const postlikeSchema = new mongoose.Schema({
    postId: {type:mongoose.Schema.Types.ObjectId , ref:"post" , required:true},
   userId :{type:mongoose.Schema.Types.ObjectId , ref:"user" , required:true}
})


module.exports = mongoose.model("postlike",postlikeSchema);