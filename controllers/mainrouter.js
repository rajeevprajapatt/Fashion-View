const express = require("express");
const router = express.Router();
const { menProducts, womenProducts } = require("../models/productSchema");

async function HomeActivities(req,res){
    const men = await menProducts.find({ Product_Category: "Men" });
    const women = await womenProducts.find({ Product_Category: "Women" });
    return res.render('index', {
        totalmen: men.length,
        totalwomen: women.length
    });
}

module.exports = {
    HomeActivities,
}