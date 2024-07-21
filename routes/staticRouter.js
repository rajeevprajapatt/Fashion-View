const express = require("express");
const User = require("../models/user")
const { checkUserLogged } = require("../middlewares/auth");

const router = express.Router();


router.get("/", (req, res) => {
    return res.render('index');
});
router.get("/shop", (req, res) => {
    return res.render('shop');
})
router.get("/user/login", checkUserLogged);

router.get("/user/signup", (req, res) => {
    res.render('signup');
});



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