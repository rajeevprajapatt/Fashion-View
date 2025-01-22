const express = require("express");
const { checkUserLogged, checkUserLogin } = require("../middlewares/auth");
const { AllMenProducts, ItemInsertion, AllWomenProducts, GetItem } = require("../controllers/products");
const { HomeActivities } = require("../controllers/mainrouter");
const multer = require("multer");
const router = express.Router();

const Product_Image_Path = './public/productImages';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, Product_Image_Path);
    },
    filename: function (req, file, cb) {
        return cb(null, file.originalname);
    }
});
const img = multer({ storage });

// Main Route - Home 
router.get("/", HomeActivities);

// User Routes
router.get("/user/login", checkUserLogged);
router.get("/user/signup", (req, res) => {
    res.render('signup');
});

router.get("/cart", (req, res) => {
    res.render('cart');
})

// Shop Routes
router.get("/Shop", (req, res) => {
    return res.render('shop');
});
router.get("/Shop/Women", AllWomenProducts);
router.get("/Shop/Men", AllMenProducts);
router.get("/Shop/item/:itemName", GetItem);
// router.get("/wishListBar",checkUserLogin,GetWishListItems);
// router.get("/cartBar",checkUserLogin,GetCartItems);

// Item Insertion ROutes
router.get("/ItemsInsertion", (req, res) => {
    res.render('FVitemsInsertion');
});
router.post("/Insert", img.array('imgPath', 4), ItemInsertion);

module.exports = router;