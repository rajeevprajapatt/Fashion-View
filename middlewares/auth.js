const { getUser } = require("../services/auth");
const router = require("../routes/staticRouter");
const cookieParser = require("cookie-parser");

const checkUserLogged = async (req, res, next) => {
    const userUid = req.cookies?.uid;

    if (!userUid) return res.render('login');

    const user = getUser(userUid);
    if (!user) {
        return res.redirect("/");
    }
    else {
        res.redirect("/shop");
    }
    req.user = user;

    next();
}
const checkUserLogin = async (req, res, next) => {
    const userUid = req.cookies?.uid;

    if (!userUid) return false;
    else return true;
    next();
}

module.exports = {
    checkUserLogged,
    checkUserLogin
}