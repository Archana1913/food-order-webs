const mongoose = require('mongoose');


const CouponSchema = new mongoose.Schema({
  code: String,
  discountAmount: Number,
  validityPeriod: {
    type: Date,
    default: Date.now,
  },
  termsAndConditions: String,
});

const Coupon = mongoose.model('Coupon', CouponSchema);
module.exports = Coupon;
