const express = require("express");
const { User, Products } = require("../models/user")
const { checkUserLogged } = require("../middlewares/auth");
const { WomenProducts, MenProducts } = require("../controllers/products")

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


router.get("/shop/:Women", WomenProducts);
router.get("/shop/:Women", MenProducts);


module.exports = router;