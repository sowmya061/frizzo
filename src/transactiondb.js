const mongoose = require("mongoose");
const Schema = mongoose.Schema;
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

const transactionSchema = new Schema({
  date: { type: String, required: true },
  expenseType: { type: String, required: true },
  month: { type: String, required: true },
  amount: { type: Number, required: true }
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
