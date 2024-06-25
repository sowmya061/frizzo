const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    user: String,
    month: String,
    amount: Number,
    type: String
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
