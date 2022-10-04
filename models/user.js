const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  walletAddress: { type: String, required: true },
  verified: { type: Boolean, required: true},

}, { timestamps: true });


module.exports = model('User', userSchema);