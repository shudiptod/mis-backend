const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routers/UserRouter");
const roleRouter = require("./routers/RoleRouter");
const authenticate = require("./utils/authMiddleware");
const AuthRouter = require("./routers/AuthRouter");
const LocationsRouter = require("./routers/LocationsRouter");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.upabr.mongodb.net/OPENMIS?retryWrites=true&w=majority`;

// connect mongoose with mongodb server
mongoose.connect(uri);

mongoose.connection.on("error", (err) => {
  console.log("error on mongoose", err);
});
mongoose.connection.on("connected", () => {
  console.log("success on mongoose");
});

// Define a route for testing

app.get("/", (req, res) => {
  res.status(200).send("Server is running");
});

app.get("/test", (req, res) => {
  res.status(200).send("OK");
});

// user router

app.use("/user", userRouter);

// roles router

app.use("/role", roleRouter);

// auth router
app.use("/auth", AuthRouter);

// locations router

app.use("/locations", LocationsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
