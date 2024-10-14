const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
  },
  paymentMethod: String,
  paymentStatus: String,
  totalAmount: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const Payment = mongoose.model('Payment', PaymentSchema);
module.exports = Payment;
