const express = require('express');
const path = require('path');
const PORT = 3000;

const app = express();

const { mongoConnect } = require('./connection');
const User = require('./models/user');
const staticRouter = require("./routes/staticRouter");
const userRoute = require("./routes/user");
const { checkUserLogged } = require("./middlewares/auth");
const cookieParser = require('cookie-parser');

mongoConnect("mongodb://127.0.0.1:27017/FashionView").then(() => {
    console.log("MongoDB connected successfully");
})

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.static(path.resolve("./public")));

app.use("/", staticRouter);
app.use("/user", userRoute);

app.listen(PORT);