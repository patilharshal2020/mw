const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
// const fetch = require("isomorphic-fetch");
const app = express();
const dotenv = require("dotenv");
require = require("esm")(module);
require("dotenv").config({
  path: "./config/.env",
});

const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(cors());

// // Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/node_form_app", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Event listeners for connection events
// mongoose.connection.on("connected", () => {
//   console.log(`Connected to MongoDB`);
// });

// mongoose.connection.on("error", (err) => {
//   console.error(`MongoDB connection error: ${err}`);
// });

// mongoose.connection.on("disconnected", () => {
//   console.log("MongoDB disconnected");
// });

// Middleware to parse JSON and form data
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve static files (if needed)
app.use(express.static("public"));

// app.post("/submit-form", (req, res) => {
//   const { body } = req;
//   console.log("client data: ", body);
//   res.status(200).send("registered...");
// });

app.use("/v1", require("./v1"));

// Define a mongoose schema for your form data
// const formDataSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   email: String,
//   mobileNumber: Number,
//   loanType: String,
//   loanAmount: Number,
//   city: String,
//   state: String,
//   postalCode: String,
//   agreeToTerms: Boolean,
// });

// // Create a mongoose model
// const FormData = mongoose.model("FormData", formDataSchema);

// Assuming you want to send the form data when the server starts
// This is just for demonstration purposes, you might want to trigger
// this based on a specific event in your application.

// client side code to generate a request
// (async () => {
//   try {
//     const formData = {
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       mobileNumber: mobileNumber,
//       typeOfLoan: typeOfLoan,
//       loanAmount: loanAmount,
//       city: city,
//       state: state,
//       zipCode: zipCode,
//     };

//     const response = await fetch("http://127.0.0.1/contactUs/submit-form", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// })();

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
