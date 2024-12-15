const express = require("express");
const router = express.Router();
const { menProducts, womenProducts } = require("../models/productSchema");

async function HomeActivities(req, res) {
    const men = await menProducts.find({ Product_Category: "Men" });
    const women = await womenProducts.find({ Product_Category: "Women" });
    return res.render('index', {
        totalMenItems: men.length,
        totalWomenItems: women.length
    });
}



module.exports = {
    HomeActivities,
}