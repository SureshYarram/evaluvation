const express = require("express");

const router = express.Router();

const Comment = require("../model/comment.model");

router.post("",async(req,res)=>{
    try {
        let comment = await Comment.create(req.body);
        return res.send(comment);
    } catch (error) {
        return res.send(error.message)
    }
});


module.exports = router;