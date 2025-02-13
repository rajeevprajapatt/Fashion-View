const { User } = require("../models/user");
const { setUser, getUser } = require("../services/auth");
const multer = require("multer");

async function handleUserSignUp(req, res) {
    const { name, email, password, file } = req.body;
    if (!name || !email || !password) {
        return res.status(400).render("signup", {
            msg: "All Fields Required",
        });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).render("signup", { msg: "Please try with a different email" });
        }

        const hashedPassword = User.hashPassword(password);

        const newUser = await User.create({
            name,
            email,
            password:hashedPassword,
            path: file
        });

        const token = setUser(newUser);
        res.cookie("uid", token);
        return res.redirect("/");

    } catch (error) {
        console.error("Error during user signup:", error);
        return res.status(500).render("signup", { msg: "Error, please try again" });
    }
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).render("login", { msg: "Please enter both email and password" });
    }

    try {
        // find the user by mail
        const user = await User.findOne({ email });
        if (!user) return res.status(400).render("login", {
            msg: "Invalid username or password",
        });

        // check if the password is correct
        const isValidPassword = await user.isValidPassword(password);
        if (!isValidPassword) return res.status(400).render("login", {
            msg: "Invalid username or password",
        });

        const token = setUser(user);
        res.cookie("uid", token);
        return res.redirect("/");
    } catch (error) {
        console.error("Error during user login:", error);
        return res.status(500).render("login", { msg: "Error, please try again" });
    }
}

module.exports = {
    handleUserSignUp,
    handleUserLogin,
}