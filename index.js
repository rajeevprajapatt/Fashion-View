const express = require('express');
require("dotenv").config();
const path = require('path');
const PORT = process.env.PORT || 3000;

const app = express();

const { mongoConnect } = require('./connection');
const { User } = require('./models/user');
const staticRouter = require("./routes/staticRouter");
const userRoute = require("./routes/user");
const { checkUserLogged } = require("./middlewares/auth");
const cookieParser = require('cookie-parser');

mongoConnect(process.env.mongo_url).then(() => {
    console.log("MongoDB connected successfully");
})

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.static(path.resolve("./public")));

app.use("/", staticRouter);
app.use("/user", userRoute);

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
});