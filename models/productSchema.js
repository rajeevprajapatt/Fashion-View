const mongoose = require("mongoose");

const menCategorySchema = new mongoose.Schema({
    Categories: {
        type: Array,
    }
})

const womenCategorySchema = new mongoose.Schema({
    Categories: {
        type: Array,
    }
})

const ProductsSchema = new mongoose.Schema({
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



const Products = mongoose.model("Products", ProductsSchema);
// const womenProducts = mongoose.model("womenProduct", womenProductsSchema);
// const menProducts = mongoose.model("menProduct", menProductsSchema);

const menCategories = mongoose.model("menCategories", menCategorySchema);
const womenCategories = mongoose.model("womenCategories", womenCategorySchema);

module.exports = { menCategories, womenCategories, Products };