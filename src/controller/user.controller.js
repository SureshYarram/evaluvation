const express = require("express");

const router = express.Router();

const User = require("../model/user.model");

router.patch("/:id",async(req,res)=>{
    try {
        let user = await User.findByIdAndUpdate(req.params.id,req.body);
        return res.send(user);
    } catch (error) {
        return res.send(error.message)
    }
});

router.delete("/:id",async(req,res)=>{
    try {
        let user = await User.findByIdAndDelete(req.params.id);
        return res.send(user)
    } catch (error) {
        return res.send(error);
    }
});