const express = require("express");

const router = express.Router();

const Post = require("../model/post.model");

router.post("",async(req,res)=>{
    try {
        let post = await Post.create(req.body);
        return res.send(post);
    } catch (error) {
        return res.send(error.message)
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        let post = await Post.findByIdAndUpdate(req.params.id,req.body);
        return res.send(post);
    } catch (error) {
        return res.send(error.message)
    }
});

router.delete("/:id",async(req,res)=>{
    try {
        let post = await Post.findByIdAndDelete(req.params.id);
        return res.send(post)
    } catch (error) {
        return res.send(error);
    }
});




router.get("",async(req,res)=>{
     
    let size = req.query.size;
        let page = req.query.page;

  
    try {
        
       let post = await Post.find().limit(size).skip((page-1)*size);
       return res.send(post);
        
    } 
    catch (error) {
        return res.send(error);
    }
})
module.exports = router
