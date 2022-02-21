const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    firstName:{type:String , required :true},
     lastName:{type:String , required :true},
      age : {type:Number , required :true},
    email :{type:String , required :true , unique :true},
    password:{type:String , required:true},
   profileImages: [{type:String , required:true}]

},{
           timestamps:true
});



userSchema.pre("save",function(next){
    if(!this.isModified("password")) return next();

    var hash = bcrypt.hashSync(this.password, 8);
    this.password=hash;
})

userSchema.methods.checkPassword = async(password)=>{
    return await bcrypt.compare(password, this.password);
}
module.exports = mongoose.model("user",userSchema)