// const mongoose = require("mongoose");
const mongoose = require('mongoose');
const { Schema } = mongoose;
// const menCategories = new Schema({
//     Categories: {
//         type: Array,
//     }
// })
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
        type: Array,
    },
    Product_Sizes: {
        type: Array
    }
})

const womenProducts = mongoose.model("womenProduct", womenProductsSchema);
const menProducts = mongoose.model("menProduct", menProductsSchema);

const menCategories = mongoose.model("menCategories", menCategorySchema);
const womenCategories = mongoose.model("womenCategories", womenCategorySchema);
// const menCategoriesModel = mongoose.model('menCategories', menCategories);
// menCategoriesModel,
module.exports = {  womenCategories, menCategories, womenProducts, menProducts };
