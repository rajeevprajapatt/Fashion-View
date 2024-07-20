const { v4: uuidv4 } = require("uuid");
const User = require("../models/user");
const express = require("express");
const { setUser, getUser } = require("../services/auth");

async function handleUserSignUp(req, res) {
    const body = req.body;
    if (!body.name || !body.email || !body.password) {
        return res.status(400).render("signup", {
            msg: "All Fields Required",
        });
    }

    const Data = await User.findOne({ email: body.email });
    if (Data === null) {
        await User.create({
            name: body.name,
            email: body.email,
            password: body.password
        });
        return res.redirect("/");
    }
    else {
        return res.render('signUp.ejs', {
            error: "Please Try with A different Email"
        })
    }
}
async function handleUserLogin(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });
    if (!user) return res.status(400).render("login", {
        msg: "Invalid username or password",
    });

    console.log(user);

    const sessionId = uuidv4();
    setUser(sessionId, user);
    res.cookie("uid", sessionId);

    // console.log(sessionIds);



    return res.redirect("/");
}

module.exports = {
    handleUserSignUp,
    handleUserLogin,
}