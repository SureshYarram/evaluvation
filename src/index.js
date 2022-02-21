

const express = require("express");


const app = express();

app.use(express.json());
const connect = require("./config/db");

const {register,Login} = require("./controller/auth.controoler");

app.use("/users",register);


app.use("/login",Login);

const post = require("./controller/post.controller");

app.use("/posts",post);

const comment = require("./controller/comment.controller");


app.use("/comments",post);

app.listen(5500,async(req,res)=>{
    try {
        await connect();
        console.log("listening port 4400");
    } catch (error) {
        console.log(error);
    }
})