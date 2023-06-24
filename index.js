const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

// connect mongoose with mongodb server
// mongoose.connect("mongodb://127.0.0.1:27017/example", () =>
//   console.log("Connected to database successfully")
// );

// Define a route for testing
app.get("/test", (req, res) => {
  res.status(200).send("OK");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
