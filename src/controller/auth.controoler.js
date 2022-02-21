

const User = require("../model/user.model");

const upload = require("../middleware/file.upload");

require("dotenv").config();

const jwt = require("jsonwebtoken");

const newToken = (user)=>{
    return jwt.sign({user},process.env.JWT_SECRET_KEY);
}


// POST
const register = (upload.single('profileImages'), async(req, res, next) => {

   let user = await User.findOne({email:req.body.email}).lean().exec();
   if(user){
       return res.send("please try another email");
   };

     user = await User.create({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
         age : req.body.age,
       email :req.body.email,
       password:req.body.password,
      profileImages: req.file.path
    });

    const token = newToken(user);
    user.save().then(result => {
      res.status(201).json({  user,token }) });

  });


const Login = async(req,res)=>{
    try {
        let user = await User.findOne({email:req.body.mail});
        if(!user){
            return res.send("please try another email password");
        }
        const token = newToken(user);
        const match = user.checkPassword(req.body.password);
        if(!match){
            return res.send("please try another email password");
        }
        return res.send({user,token})
    } catch (error) {
        return res.send(error.message);
    }
}

module.exports = {register , Login}