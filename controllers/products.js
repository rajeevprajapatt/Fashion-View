const express = require("express");
const Url = require("url");
const {
    womenProducts,
    menProducts,
    womenCategories,
    menCategories
} = require("../models/productSchema");

async function getAllProducts(req, res, productCollection, productCategory) {
    try {
        const [items, category] = await Promise.all([
            productCollection.find({}),
            productCategory.findOne({ Categories: { $type: "array" } })
        ]);

        if (!category || !items) {
            return res.status(404).send("Categories or Products not found.");
        }

        const Categories = category.Categories;
        res.render("shop", {
            data: items,
            Categories,
            path: req.path
        });
    } catch (error) {
        console.error("Error to get products:", error);
        res.status(500).send("Error while getting a product");
    }
}

// Function to handle fetching all women's products
async function AllWomenProducts(req, res) {
    return getAllProducts(req, res, womenProducts, womenCategories);
}

// Function to handle fetching all men's products
async function AllMenProducts(req, res) {
    return getAllProducts(req, res, menProducts, menCategories);
}

async function ItemInsertion(req, res) {
    const body = req.body;

    // let paths = [];
    const paths = req.files.forEach(file => {
        paths.push(`${file.destination.split("/").pop()}/${file.originalname}`);
    })

    let productCollection = body.Product_Category === "Women" ? womenProducts : menProducts;
    try {
        await productCollection.create({
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
        res.redirect("/ItemsInsertion");
    } catch (error) {
        console.error("Error while inserting product:", error);
        res.status(500).send("error while inserting the product.");
    }
}

async function GetItem(req, res) {
    const itemName = req.params.itemName;
    try {
        let itemDetails = await womenProducts.findOne({ Product_Name: itemName });

        if (!itemDetails) {
            itemDetails = await menProducts.findOne({ Product_Name: itemName });
        }

        if (!itemDetails) {
            return res.status(404).send("Product not found");
        }

        res.render('item', {
            item: itemDetails,
        });
    } catch (error) {
        console.error("Error while getting an item:", error);
        res.status(500).send("Error while fetching the item.");
    }
}

module.exports = {
    AllMenProducts,
    ItemInsertion,
    AllWomenProducts,
    GetItem
}