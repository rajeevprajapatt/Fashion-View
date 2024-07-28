const express = require("express");
const { User } = require("../models/user");
const { menProducts, womenProducts, } = require("../models/productSchema");
const { checkUserLogged } = require("../middlewares/auth");
const { GetWomenProducts, GetMenProducts, ItemInsertion } = require("../controllers/products");
const { HomeActivities } = require("../controllers/mainrouter");
const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './public/productImages');
    },
    filename: function (req, file, cb) {
        return cb(null, file.originalname);
    }
});
const img = multer({ storage });

router.get("/", HomeActivities);

router.get("/Shop", (req, res) => {
    return res.render('Shop');
});

router.get("/user/login", checkUserLogged);

router.get("/user/signup", (req, res) => {
    res.render('signup');
});

router.get("/ItemsInsertion", (req, res) => {
    res.render('FVitemsInsertion');
});

router.post("/Insert", img.array('imgPath', 4), ItemInsertion);

router.get("/Shop/Women", GetWomenProducts);
router.get("/Shop/Men", GetMenProducts);

module.exports = router;