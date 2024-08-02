const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define schema
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

// Create model based on schema
const User = mongoose.model("User", loginSchema);

// Export model
module.exports = User;
