const express = require('express');
const http = require('http');
const { Server } = require("socket.io")
require("dotenv").config();
const path = require('path');
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;
const uri = "mongodb+srv://rajeevprajapat06:Rajeev%4063789@Fashion-View.jr5jy.mongodb.net/FashionView?retryWrites=true&w=majority";
const status = require("express-status-monitor");
const app = express();
// const server = http.createServer(app);
// const io = new Server(server);
const {
  womenProducts,
  menProducts,
  womenCategories,
  menCategories
} = require("./models/productSchema");

const { mongoConnect } = require('./connection');
const { User } = require('./models/user');
const staticRouter = require("./routes/staticRouter");
const userRoute = require("./routes/user");
const { checkUserLogged } = require("./middlewares/auth");
const cookieParser = require('cookie-parser');

mongoConnect(uri).then(() => {
  console.log("MongoDB connected successfully",uri);
})
// mongoConnect(MONGO_URL).then(() => {
//   console.log("MongoDB connected successfully");
// })

app.use(status());

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.static(path.resolve("./public")));

app.use("/", staticRouter);
app.use("/user", userRoute);


app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});