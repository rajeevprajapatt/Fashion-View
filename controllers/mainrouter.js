const express = require("express");
const router = express.Router();
const { womenCategories, menCategories, womenProducts, menProducts } = require("../models/productSchema");
// menCategoriesModel
async function HomeActivities(req, res) {
    const men = await menProducts.find({});
    const women = await womenProducts.find({});
    console.log(men);
    return res.render('index', {
        totalMenItems: men.length,
        totalWomenItems: women.length
    });
}


module.exports = {
    HomeActivities,
}