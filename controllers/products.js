const express = require("express");
const Url = require("url");
const {
    womenProducts,
    menProducts,
    womenCategories,
    menCategories
} = require("../models/productSchema");

async function AllWomenProducts(req, res) {
    const items = await womenProducts.find({});
    const category = await womenCategories.findOne({ Categories: { $type: "array" } });
    const Categories = category.Categories;
    res.render("shop", {
        data: items,
        Categories,
        path: req.path
    })
}

async function GetWomenProducts(req, res) {
    const para = req.params.category;
    console.log(para);
    // let items = await womenProducts.find({});

    if (para == "All") {
        items = await womenProducts.find({});
    }
    else {
        items = await womenProducts.find({ Product_Type: para });
    }
    // const category = await womenCategories.findOne({ Categories: { $type: "array" } });
    // const Categories = category.Categories;
    res.render("shop", {
        data: items,
        // Categories,
        // path:req.path
    })
}

async function AllMenProducts(req, res) {
    const items = await menProducts.find({});
    const category = await menCategories.findOne({ Categories: { $type: "array" } });
    const Categories = category.Categories;
    res.render("shop", {
        data: items,
        Categories,
        path: req.path
    })
}

async function ItemInsertion(req, res) {
    const body = req.body;

    let paths = [];
    req.files.forEach(file => {
        paths.push(`${file.destination.split("/").pop()}/${file.originalname}`);
    })

    let category = body.Product_Category;
    try {
        if (category == "Women") {
            await womenProducts.create({
                Product_Name: body.Product_Name,
                Product_Size_Type: body.Product_Size_Type,
                Product_Description: body.Product_Description,
                Product_Category: body.Product_Category,
                Product_Type: body.Product_Type,
                Product_Price: body.Product_Price,
                Product_CutPrice: body.Product_CutPrice,
                Product_ImgPaths: paths,
                Product_Sizes: body.Product_Sizes.split(" "),
            })
        }
        else {
            await menProducts.create({
                Product_Name: body.Product_Name,
                Product_Size_Type: body.Product_Size_Type,
                Product_Description: body.Product_Description,
                Product_Category: body.Product_Category,
                Product_Type: body.Product_Type,
                Product_Price: body.Product_Price,
                Product_CutPrice: body.Product_CutPrice,
                Product_ImgPaths: paths,
                Product_Sizes: body.Product_Sizes.split(" "),
            })
        }
    } catch (error) {
        console.log("Error for Request", error)
    }
    res.redirect("/ItemsInsertion");
}
module.exports = {
    GetWomenProducts,
    AllMenProducts,
    ItemInsertion,
    AllWomenProducts
}