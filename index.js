const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routers/UserRouter");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.upabr.mongodb.net/?retryWrites=true&w=majority`;

// connect mongoose with mongodb server
mongoose.connect(uri);

mongoose.connection.on("error", (err) => {
  console.log("error on mongoose", err);
});
mongoose.connection.on("connected", () => {
  console.log("success on mongoose");
});

// Define a route for testing
app.get("/test", (req, res) => {
  res.status(200).send("OK");
});

// user router

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
