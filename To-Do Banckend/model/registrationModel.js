const mongoose = require("mongoose");
const { Schema } = mongoose;
const registrationModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "merchant", "super"],
  },
});
module.exports = mongoose.model("userRegistration", registrationModel);
