const mongoose = require("mongoose");


const womenProductsSchema = new mongoose.Schema({
    Product_Name: {
        type: String,
    },
    Product_Size_Type: {
        type: String,
    },
    Product_Description: {
        type: String
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
    Product_ImgPaths: {
        type: Array,
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
    Product_Description: {
        type: String
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
    Product_ImgPaths: {
        type: String,
    },
    Product_Sizes: {
        type: Array
    }
})

const womenProducts = mongoose.model("womenProduct", womenProductsSchema);
const menProducts = mongoose.model("menProduct", menProductsSchema);

module.exports = { womenProducts, menProducts };
