const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String
  },
  age: {
    type: String || Number
  },
  gender: {
    type: String
  },
  address: {
    type: String
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
