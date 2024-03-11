const express=require('express')
const route=express.Router();
const appRoutes = require("./api");
let apiBaseUrl = "/api/v1";
route.use(apiBaseUrl, appRoutes);
route.get('/api/v1',(req,res)=>{
    res.send("welcome to api route")
})
module.exports=route