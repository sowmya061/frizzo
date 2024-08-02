const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    date: { type: String, required: true },
    expenseType: { type: String, required: true },
    month: { type: String, required: true },
    amount: { type: Number, required: true }
  });
  
  const Transaction = mongoose.model('Transaction', transactionSchema);
  
  // Export model
  module.exports = Transaction;
  