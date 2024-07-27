const express = require("express");
const { User, Products } = require("../models/user")
const { checkUserLogged } = require("../middlewares/auth");

const router = express.Router();


router.get("/",async (req, res) => {
    const men = await Products.find({Product_Category:"Men"});
    const women = await Products.find({Product_Category:"Women"});
    return res.render('index',{
        totalmen:men.length,
        totalwomen:women.length

    });
    
});
router.get("/shop", (req, res) => {
    return res.render('shop');
})
router.get("/user/login", checkUserLogged);

router.get("/user/signup", (req, res) => {
    res.render('signup');
});

router.get("/shop", async (req, res) => {
    const varr = req.params.Men;

    // const items = await Products.findOne({Product_Category:Women});
    console.log(varr);

    res.render("shop");
})
router.get("/shop/:Women", async (req, res) => {
    const Women = req.params.Women.split(":")[1];

    const items = await Products.find({Product_Category:Women});
    console.log(items);
    res.render("shop",{
        data:items,
    });
})



// router.post("/signup", async (req, res) => {
//     const body = req.body;
//     if (!body.name || !body.email || !body.password) {
//         return res.status(400).render("signup", {
//             msg: "All Fields Required",
//         });
//     }

//     const {name, email, password} = body;
//     await User.create({
//         name,
//         email,
//         password,
//     });
//     return res.render("index");
//     console.log(Data);
// })

module.exports = router;