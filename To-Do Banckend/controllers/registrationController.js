const blankInput = require("../helperFunction/blankInput");
const emailValidator = require("../helperFunction/emailValidator");
const registrationModel = require("../model/registrationModel");
const bcrypt = require("bcrypt");
const registrationController = async (req, res) => {
  const { username, email, password } = req.body;
  if (blankInput(username)) {
    res.send({ error: "Username Is Requires" });
  } else if (blankInput(email) || !emailValidator(email)) {
    if (blankInput(email)) {
      res.send({ error: "email is required" });
    } else if (!emailValidator(email)) {
      res.send({ error: "Please Enter the Valid Email" });
    }
  } else if (blankInput(password)) {
    res.send({ error: "Password is required" });
  } else {
   const existingEmail= await registrationModel.find({email : email})
    if(existingEmail.length > 0){
      res.send({error : `${email} This email already taken`})
    }
    else{

      bcrypt.hash(password, 10, function(err, hash) {
        const userRegistration = new registrationModel({
          name: username,
          email: email,
          password: hash,
          role: "user",
        });
        userRegistration.save();
        res.send({
          username: userRegistration.name,
          email: userRegistration.email,
          role: userRegistration.role
                });
    });

    }
  } 
};

module.exports = registrationController;
