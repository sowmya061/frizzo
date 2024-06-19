const mongoose = require("mongoose");
// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/login", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Database connected");
})
.catch((err) => {
  console.error("Database connection error:", err);
});

// Create schema
const loginSchema = new mongoose.Schema({
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
