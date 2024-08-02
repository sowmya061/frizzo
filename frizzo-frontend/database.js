// db.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/finance', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true, // Ensure unique fields are indexed
})
.then(() => {
    console.log("Database connected transacion");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
module.exports = mongoose.connection;
