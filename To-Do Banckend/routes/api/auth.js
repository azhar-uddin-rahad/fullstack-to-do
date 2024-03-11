const express = require("express");
const route = express.Router();
const secureApi=require('../../middleware/secureApi');
const registrationController = require("../../controllers/registrationController");

route.post("/registration",secureApi,registrationController)
route.get("/registration", (req, res) => {
 res.send("registration route set up ");
});

module.exports = route;
