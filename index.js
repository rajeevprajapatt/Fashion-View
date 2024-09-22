const express = require('express');
// const { MongoClient } = require('mongodb');
require("dotenv").config();
const path = require('path');
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/FashionView";

const app = express();

const { mongoConnect } = require('./connection');
const { User } = require('./models/user');
const staticRouter = require("./routes/staticRouter");
const userRoute = require("./routes/user");
const { checkUserLogged } = require("./middlewares/auth");
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.static(path.resolve("./public")));

app.use("/", staticRouter);
app.use("/user", userRoute);

const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://rajeevprajapat06:Rajeev%4063789@fashion-view.jr5jy.mongodb.net/?retryWrites=true&w=majority&appName=Fashion-View";
const uri = "mongodb+srv://rajeevprajapat06:Rajeev%4063789@fashion-view.jr5jy.mongodb.net/?retryWrites=true&w=majority&appName=Fashion-View";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
mongoConnect(uri).then(() => {
  console.log("MongoDB connected successfully");
})

// async function run() {
//   try {
//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//     await client.connect();
//     console.log("Connected to MongoDB");
//     const database = client.db('FashionView');

//     // Select the collection (replace 'users' with your actual collection name)
//     const collection = database.collection('mencategories');
//     // Log the fetched data
//     const users = await collection.find({}).toArray();

//     console.log('Users:', users);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   } finally {
//     // Close the connection after operations
//     await client.close();
//   }
//     // Fetch all documents in the collection
// //     const users = await collection.find({}).toArray();
// //     // MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
// //     // .then(() => console.log('MongoDB connected successfully'))
// //     // .catch(err => console.error('MongoDB connection error:', err));
// // }catch(error){
// //     console.log('error',error);
    
// // }
// }
// run().catch(console.dir);


app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
});