const express=require('express')
const route=express.Router();
const appRoutes = require("./api");
let apiBaseUrl = "/api/v1";
route.use(apiBaseUrl, appRoutes);
module.exports=route