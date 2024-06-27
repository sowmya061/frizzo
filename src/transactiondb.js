const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Connect to MongoDB (assuming this is the same connection as for User)
mongoose.connect("mongodb://localhost:27017/finance", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Database connected transacion");
})
.catch((err) => {
  console.error("Database connection error:", err);
});

// Define schema
const transactionSchema = new Schema({
  date: { type: String, required: true },
  expenseType: { type: String, required: true },
  month: { type: String, required: true },
  amount: { type: Number, required: true }
});

// Create model based on schema
const Transaction = mongoose.model('Transaction', transactionSchema);

// Export model
module.exports = Transaction;
