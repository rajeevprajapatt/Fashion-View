const express = require("express");
const { womenProducts, menProducts } = require("../models/user");

async function WomenProducts(req, res) {
    // const Women = req.params.Women.split(":")[1];
    const items = await womenProducts.find({ });
    res.render("shop", {
        data: items,
    }) 
}

async function MenProducts(req, res) {
    // const Women = req.params.Women.split(":")[1];
    const items = await menProducts.find({ });
    res.render("shop", {
        data: items,
    }) 
}

module.exports = {
    WomenProducts,
    MenProducts
}