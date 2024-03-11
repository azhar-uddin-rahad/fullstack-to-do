const express = require("express");
const route = express.Router();

route.get("/registration", (req, res) => {
 res.send("registration route set up ");
});

module.exports = route;
