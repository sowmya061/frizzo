const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const loginSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model("User", loginSchema);

module.exports = User;
