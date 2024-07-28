const express = require("express");
const { User } = require("../models/user");
const { menProducts, womenProducts } = require("../models/productSchema")
const { checkUserLogged } = require("../middlewares/auth");
const { WomenProducts, MenProducts } = require("../controllers/products")
const multer = require("multer");
// const upload = multer({ dest: "upload/" });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './public/examples');
    },
    filename: function (req, file, cb) {
        return cb(null, file.originalname);
    }
})

const img = multer({ storage });


const router = express.Router();

router.get("/", async (req, res) => {
    const men = await Products.find({ Product_Category: "Men" });
    const women = await Products.find({ Product_Category: "Women" });
    return res.render('index', {
        totalmen: men.length,
        totalwomen: women.length

    });
});


router.get("/shop", (req, res) => {
    return res.render('shop');
})
router.get("/user/login", checkUserLogged);

router.get("/user/signup", (req, res) => {
    res.render('signup');
});

router.get("/adding", (req, res) => {
    res.render("add");
})
router.post("/add", img.array('imgPath', 4), async (req, res) => {
    const body = req.body;
    let paths = [];

    // console.log(req.files);
    req.files.forEach(file => {
        paths.push(`${file.destination.split("/").pop()}/${file.originalname}`);
    })

    console.log(arr);
    let category = body.Product_Category;
    if (category === "Women") {
        await womenProducts.create({
            Product_Name: body.Product_Name,
            Product_Size_Type: body.Product_Size_Type,
            Product_Description: body.Product_Description,
            Product_Category: body.Product_Category,
            Product_Type: body.Product_Type,
            Product_Price: body.Product_Price,
            Product_CutPrice: body.Product_CutPrice,
            Product_ImgPaths: body.paths,
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
            Product_ImgPaths: body.paths,
            Product_Sizes: body.Product_Sizes.split(" "),
        })
    }




    console.log(body);
    // console.log(body.Product_Sizes.split(" "));

    res.redirect("/adding");
})

router.get("/shop/Women", WomenProducts);
router.get("/shop/Men", MenProducts);


module.exports = router;