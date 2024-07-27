const mongoose = require('mongoose');
const { estimatedDocumentCount } = require('../../shortUrl/models/user');
const { type } = require('jquery');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    path: {
        type: String
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

const ProductSchema = new mongoose.Schema({
    Product_Name: {
        type: String,
    },
    Product_Size_Type: {
        type: String,
    },
    Product_Description:{
        type:String
    },
    Product_Category: {
        type: String,
    },
    Product_Type: {
        type: String,
    },
    Product_Price: {
        type: Number,
    },
    Product_CutPrice: {
        type: Number,
    },
    Product_ImgPath1: {
        type: String,
    },
    Product_ImgPath2: {
        type: String,
    },
    Product_ImgPath3: {
        type: String,
    },
    Product_ImgPath4: {
        type: String,
    },
    Product_Sizes: {
        type: Array
    }
})

const Products = mongoose.model("Products", ProductSchema);


const womenProductsSchema = new mongoose.Schema({
    Product_Name: {
        type: String,
    },
    Product_Size_Type: {
        type: String,
    },
    Product_Description:{
        type:String
    },
    Product_Category: {
        type: String,
    },
    Product_Type: {
        type: String,
    },
    Product_Price: {
        type: Number,
    },
    Product_CutPrice: {
        type: Number,
    },
    Product_ImgPath1: {
        type: String,
    },
    Product_ImgPath2: {
        type: String,
    },
    Product_ImgPath3: {
        type: String,
    },
    Product_ImgPath4: {
        type: String,
    },
    Product_Sizes: {
        type: Array
    }
})


const menProductsSchema = new mongoose.Schema({
    Product_Name: {
        type: String,
    },
    Product_Size_Type: {
        type: String,
    },
    Product_Description:{
        type:String
    },
    Product_Category: {
        type: String,
    },
    Product_Type: {
        type: String,
    },
    Product_Price: {
        type: Number,
    },
    Product_CutPrice: {
        type: Number,
    },
    Product_ImgPath1: {
        type: String,
    },
    Product_ImgPath2: {
        type: String,
    },
    Product_ImgPath3: {
        type: String,
    },
    Product_ImgPath4: {
        type: String,
    },
    Product_Sizes: {
        type: Array
    }
})

const womenProducts = mongoose.model("womenProduct",womenProductsSchema)
const menProducts = mongoose.model("menProduct",menProductsSchema)


module.exports = {
    User,
    Products,
    womenProducts,
    menProducts,
};



// db.Products.insertOne({
//     Product_Name: "Solids: Forest Green",
//     Product_Size_Type: "Women Tank Top",
//     Product_Category: "Women",
//     Product_Type: "Tops",
//     Product_Price: 999,
//     Product_CutPrice: 1699,
//     Product_ImgPath1: "Product-Images/1720675674_7406530.webp",
//     Product_ImgPath2: "Product-Images/1720675674_7522967.webp",
//     Product_ImgPath3: "Product-Images/1720675674_7317829.webp",
//     Product_ImgPath4: "Product-Images/1720675674_8732156.webp",
//     Product_Sizes: ['S', 'M', 'L', 'XL']
// });