const mongoose = require("mongoose");

// Define the Mongoose schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  mobileNumber: Number,
  loanType: String,
  loanAmount: Number,
  city: String,
  state: String,
  postalCode: String,
  agreeToTerms: Boolean,
});

// Export the Mongoose model
module.exports = mongoose.model("User", userSchema);
