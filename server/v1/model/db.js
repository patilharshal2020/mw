const mongoose = require("mongoose");

// Replace 'node_form_app' with your preferred database name
const dbName = "node_form_app";

// Connection URI for local MongoDB instance
const mongoURI = `mongodb://localhost:27017/${dbName}`;

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Event listeners for connection events
db.on("connected", () => {
  console.log(`Connected to MongoDB at ${mongoURI}`);
});

db.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

// Close the Mongoose connection when the Node process exits
process.on("SIGINT", () => {
  db.close(() => {
    console.log("MongoDB connection closed through app termination");
    process.exit(0);
  });
});

