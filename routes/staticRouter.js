const express = require("express");
const { checkUserLogged, checkUserLogin } = require("../middlewares/auth");
// const { ItemInsertion, GetItem, getAllProducts } = require("../controllers/products");
const productRoute = require("../controllers/products");
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
router.get("/Shop/:gender", productRoute.getAllProducts);
// router.get("/Shop/", AllMenProducts);
router.get("/Shop/item/:itemName", productRoute.GetItem);
// router.get("/wishListBar",checkUserLogin,GetWishListItems);
// router.get("/cartBar",checkUserLogin,GetCartItems);

// Item Insertion ROutes
router.get("/ItemsInsertion", (req, res) => {
    const msg = req.query.msg || null;
    res.render('FVitemsInsertion', { msg });
});
router.post("/Insert", img.array('imgPath', 4), productRoute.ItemInsertion);

module.exports = router;