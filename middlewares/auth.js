const { getUser } = require("../services/auth");
const router = require("../routes/staticRouter");

const checkUserLogged = async (req, res, next) => {
    const userUid = req.cookies?.uid;

    if(!userUid) next();

    return res.redirect("/shop");

    console.log(userUid);

}

module.exports = {
    checkUserLogged
}