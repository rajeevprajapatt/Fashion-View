const express = require("express");
const { womenProducts, menProducts } = require("../models/productSchema");

async function GetWomenProducts(req, res) {
    const items = await womenProducts.find({ });
    res.render("shop", {
        data: items,
    }) 
}

async function GetMenProducts(req, res) {
    const items = await menProducts.find({ });
    res.render("shop", {
        data: items,
    }) 
}

async function ItemInsertion(req,res){
        const body = req.body;

        let paths = [];
        req.files.forEach(file => {
            paths.push(`${file.destination.split("/").pop()}/${file.originalname}`);
        })
    
        let category = body.Product_Category;
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
        res.redirect("/ItemsInsertion");
}
module.exports = {
    GetWomenProducts,
    GetMenProducts,
    ItemInsertion
}