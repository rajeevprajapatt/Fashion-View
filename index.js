const express = require('express');
const http = require('http');
const { Server } = require("socket.io")
require("dotenv").config();
const path = require('path');
const PORT = process.env.PORT || 3000;
const MONGO_URL = "mongodb+srv://rajeevprajapat06:Rajeev%4063789@fashion-view.jr5jy.mongodb.net/FashionView?retryWrites=true&w=majority&appName=Fashion-View"

const status = require("express-status-monitor");
const app = express();
const { mongoConnect } = require('./connection');
const { User } = require('./models/user');
const staticRouter = require("./routes/staticRouter");
const userRoute = require("./routes/user");
const { checkUserLogged } = require("./middlewares/auth");
const cookieParser = require('cookie-parser');

mongoConnect(MONGO_URL).then(() => {
  console.log("MongoDB connected successfully");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

app.use(status());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.static(path.resolve("./public")));

app.use("/", staticRouter);
app.use("/user", userRoute);
app.get("/demo", (req, res) => {
  res.render("demo");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});