require("dotenv").config();
const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json()); // Body parser middleware
const routes = require('./routes');
const mongoConfig = require("./config/mongoConfig");
mongoConfig();
app.use(routes);

app.get("/", (req, res) => {
  res.send("Todo server is running");
});
app.listen(4000, () => {
  console.log("Server running on port 4000");
});