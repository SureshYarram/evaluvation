const mongoose = require("mongoose");


const commentSchema = new mongoose.Schema({
    body:{type:String , required :true},
    postId: {type:mongoose.Schema.Types.ObjectId , ref:"post" , required:true},
    userId :{type:mongoose.Schema.Types.ObjectId , ref:"user" , required:true}
},{
    timestamps:true
});


module.exports = mongoose.model("comment",commentSchema);