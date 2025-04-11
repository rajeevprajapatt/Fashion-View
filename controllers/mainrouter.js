const ProductSchema = require("../models/productSchema");

async function HomeActivities(req, res) {
    const men = await ProductSchema.Products.find({ Product_Category: "Men" });
    const women = await ProductSchema.Products.find({ Product_Category: "Women" });
    return res.render('index', {
        totalMenItems: men.length,
        totalWomenItems: women.length
    });
}


module.exports = {
    HomeActivities,
}