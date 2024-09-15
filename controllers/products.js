const express = require("express");
const Url = require("url");
const {
    womenProducts,
    menProducts,
    womenCategories,
    menCategories
} = require("../models/productSchema");

async function AllWomenProducts(req, res) {
    try {
        const items = await womenProducts.find({});
        const category = await womenCategories.findOne({ Categories: { $type: "array" } });
        const Categories = category.Categories;
        res.render("shop", {
            data: items,
            Categories,
            path: req.path
        });
    } catch (error) {
        console.log(error);
    }
};

async function AllMenProducts(req, res) {
    const items = await menProducts.find({});
    const category = await menCategories.findOne({ Categories: { $type: "array" } });
    const Categories = category.Categories;
    res.render("shop", {
        data: items,
        Categories,
        path: req.path
    });
};

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

async function GetItem(req, res){
    // const para = decodeURIComponent(req.body.params);
    const itemName = req.params.itemName;
    let itemDetails = await womenProducts.findOne({Product_Name:itemName});
    if(!itemDetails){
        itemDetails = await menProducts.findOne({Product_Name:itemName});
    }
    console.log(itemName);
    console.log(itemDetails);
    res.render('item',{
        item:itemDetails,
    });             
}

module.exports = {
    AllMenProducts,
    ItemInsertion,
    AllWomenProducts,
    GetItem
}